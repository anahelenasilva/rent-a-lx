import { Router } from 'express'

import { createCategoryController } from '../modules/cars/useCases/create-category'
import { getAllCategoriesController } from '../modules/cars/useCases/get-all-categories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
    return getAllCategoriesController.handle(request, response)
})

export { categoriesRoutes }