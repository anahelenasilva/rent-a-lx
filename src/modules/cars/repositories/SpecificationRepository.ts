import { Specification } from "../models/specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[]

    constructor() {
        this.specifications = []
    }

    getByName(name: string): Specification {
        return this.specifications.find(c => c.name === name);
    }

    create(dto: ICreateSpecificationDTO): void {
        const specification = new Specification()
        Object.assign(specification, {
            name: dto.name,
            description: dto.description,
            created_at: new Date()
        })

        this.specifications.push(specification)
    }

}

export { SpecificationRepository }