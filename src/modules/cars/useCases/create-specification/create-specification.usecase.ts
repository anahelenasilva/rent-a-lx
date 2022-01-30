import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository'

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    execute({ name, description }: IRequest): void {
        const specification = this.specificationRepository.getByName(name)
        if (specification) {
            throw new Error('Specification already exists')
        }

        this.specificationRepository.create({ name, description })
    }

}

export { CreateSpecificationUseCase }