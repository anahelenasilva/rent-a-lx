import { Router } from 'express'
import multer from 'multer'

import createCategoryController from '../modules/cars/useCases/create-category'
import getAllCategoriesController from '../modules/cars/useCases/get-all-categories'
import importCategoryController from '../modules/cars/useCases/import-category'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController().handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
    return getAllCategoriesController().handle(request, response)
})

const upload = multer({
    dest: './tmp'
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
    return importCategoryController().handle(request, response)
})

export { categoriesRoutes }