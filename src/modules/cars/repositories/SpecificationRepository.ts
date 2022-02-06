import { getRepository } from 'typeorm'
import { Repository } from 'typeorm/repository/Repository'

import { Specification } from '../models/specification'
import { ICreateSpecificationDTO, ISpecificationRepository } from './ISpecificationRepository'

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>

    constructor() {
        this.repository = getRepository(Specification)
    }

    async getByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name })
        return specification
    }

    async create(dto: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description: dto.description,
            name: dto.name
        })

        await this.repository.save(specification)
    }

}

export { SpecificationRepository }