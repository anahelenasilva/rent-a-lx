import { CategoryRepository } from '../../repositories/CategoryRepository'
import { GetAllCategoriesController } from './get-all-categories.controller'
import { GetAllCategoriesUseCase } from './get-all-categories.usecase'

export default (): GetAllCategoriesController => {
    const categoryRepository = new CategoryRepository()
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository)
    const getAllCategoriesController = new GetAllCategoriesController(getAllCategoriesUseCase)
    return getAllCategoriesController
}
