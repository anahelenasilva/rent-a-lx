import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository'

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationService {

    constructor(private SpecificationRepository: ISpecificationRepository) { }

    execute({ name, description }: IRequest): void {
        const specification = this.SpecificationRepository.getByName(name)
        if (specification) {
            throw new Error('Specification already exists')
        }

        this.SpecificationRepository.create({ name, description })
    }

}

export { CreateSpecificationService }