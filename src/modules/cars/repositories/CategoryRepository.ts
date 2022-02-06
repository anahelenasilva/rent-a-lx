import { getRepository } from 'typeorm'
import { Repository } from 'typeorm/repository/Repository'
import { Category } from '../models/category'
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository'

class CategoryRepository implements ICategoryRepository {

    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category)
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        })

        await this.repository.save(category)
    }

    async getAll(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories
    }

    async getByName(name: string): Promise<Category> {
        const category = this.repository.findOne({ name })
        return category
    }
}

export { CategoryRepository }