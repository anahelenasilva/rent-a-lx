import { Category } from '../models/category'

interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoryRepository {
    getByName(name: string): Promise<Category>
    getAll(): Promise<Category[]>
    create(dto: ICreateCategoryDTO): Promise<void>
}

export { ICategoryRepository, ICreateCategoryDTO }