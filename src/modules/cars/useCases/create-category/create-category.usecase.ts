import { inject, injectable } from 'tsyringe'
import { ICategoryRepository } from '../../../../modules/cars/repositories/ICategoryRepository'
import { AppError } from '../../../../errors/app.error'

interface IRequest {
    name: string
    description: string
}

@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const category = await this.categoryRepository.getByName(name)
        if (category) {
            throw new AppError('Category already exists')
        }

        this.categoryRepository.create({ name, description })
    }

}

export { CreateCategoryUseCase }