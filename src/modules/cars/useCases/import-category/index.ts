import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ImportCategoryController } from "./import-category.controller";
import { ImportCategoryUseCase } from "./import-category.usecase";

export default (): ImportCategoryController => {
    const categoryRepository = new CategoryRepository()
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
    const importCategoryController = new ImportCategoryController(importCategoryUseCase)
    return importCategoryController
}