import { Router } from 'express'

import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository'
import { createCategoryController } from '../modules/cars/useCases/create-category'

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
    const categories = categoryRepository.getAll()
    return response.json(categories)
})

export { categoriesRoutes }