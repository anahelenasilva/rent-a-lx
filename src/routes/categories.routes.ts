import { Router } from 'express'
import { CreateCategoryService } from '../modules/cars/services/create-category.service'
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository'

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createCategoryService = new CreateCategoryService(categoryRepository)
    createCategoryService.execute({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
    const categories = categoryRepository.getAll()
    return response.json(categories)
})

export { categoriesRoutes }