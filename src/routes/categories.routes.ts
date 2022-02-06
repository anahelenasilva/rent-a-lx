import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/create-category/create-category.controller'
import getAllCategoriesController from '../modules/cars/useCases/get-all-categories'
import importCategoryController from '../modules/cars/useCases/import-category'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
categoriesRoutes.post('/', createCategoryController.handle)

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