import { Specification } from '../models/specification'

interface ICreateSpecificationDTO {
    name: string
    description: string
}

interface ISpecificationRepository {
    create(dto: ICreateSpecificationDTO): Promise<void>
    getByName(name: string): Promise<Specification>
}

export { ISpecificationRepository, ICreateSpecificationDTO }