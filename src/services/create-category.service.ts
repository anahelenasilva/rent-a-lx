import { CategoryRepository } from '../repositories/categoryRepository'

interface IRequest {
    name: string
    description: string
}

class CreateCategoryService {

    constructor(private categoryRepository: CategoryRepository) { }

    execute({ name, description }: IRequest): void {
        const category = this.categoryRepository.getByName(name)
        if (category) {
            throw new Error('Category already exists')
        }

        this.categoryRepository.create({ name, description })
    }

}

export { CreateCategoryService }