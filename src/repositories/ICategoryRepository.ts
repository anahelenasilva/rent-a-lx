import { Category } from '../models/category'

interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoryRepository {
    getByName(name: string): Category
    getAll(): Category[]
    create(dto: ICreateCategoryDTO): void
}

export { ICategoryRepository, ICreateCategoryDTO }