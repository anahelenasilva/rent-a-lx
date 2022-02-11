import { inject, injectable } from 'tsyringe'
import { ISpecificationRepository } from '../../../../modules/cars/repositories/ISpecificationRepository'
import { AppError } from '../../../../errors/app.error'

interface IRequest {
    name: string
    description: string
}

@injectable()
class CreateSpecificationUseCase {

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const specification = await this.specificationRepository.getByName(name)
        if (specification) {
            throw new AppError('Specification already exists')
        }

        this.specificationRepository.create({ name, description })
    }

}

export { CreateSpecificationUseCase }