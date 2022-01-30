import { Specification } from '../models/specification'

interface ICreateSpecificationDTO {
    name: string
    description: string
}

interface ISpecificationRepository {
    create(dto: ICreateSpecificationDTO): void
    getByName(name: string): Specification
}

export { ISpecificationRepository, ICreateSpecificationDTO }