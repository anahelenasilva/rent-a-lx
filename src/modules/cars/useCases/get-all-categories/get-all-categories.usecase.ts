import { Category } from "@modules/cars/models/category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class GetAllCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    execute(): Category[] {
        return this.categoryRepository.getAll()
    }
}

export { GetAllCategoriesUseCase }