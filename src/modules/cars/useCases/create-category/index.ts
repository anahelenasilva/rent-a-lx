import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryController } from "./create-category.controller";
import { CreateCategoryUseCase } from "./create-category.usecase";

const categoryRepository = CategoryRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }