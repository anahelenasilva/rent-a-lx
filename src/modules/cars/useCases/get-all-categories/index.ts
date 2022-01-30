import { CategoryRepository } from '../../repositories/CategoryRepository'
import { GetAllCategoriesController } from './get-all-categories.controller'
import { GetAllCategoriesUseCase } from './get-all-categories.usecase'

const categoryRepository = new CategoryRepository()
const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository)
const getAllCategoriesController = new GetAllCategoriesController(getAllCategoriesUseCase)

export { getAllCategoriesController }