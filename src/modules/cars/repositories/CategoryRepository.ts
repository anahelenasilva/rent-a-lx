import { Category } from '../models/category'
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository'

class CategoryRepository implements ICategoryRepository {
    private categories: Category[]

    private static instance: CategoryRepository

    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.instance) {
            CategoryRepository.instance = new CategoryRepository()
        }
        return CategoryRepository.instance
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category()
        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })
        this.categories.push(category)
    }

    getAll(): Category[] {
        return this.categories
    }

    getByName(name: string): Category {
        return this.categories.find(c => c.name === name)
    }
}

export { CategoryRepository }