import { Category } from '../models/category'

interface ICreateCategoryDTO {
    name: string
    description: string
}

class CategoryRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
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
        return this.categories;
    }
}

export { CategoryRepository }