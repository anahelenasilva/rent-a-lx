import { Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/create-specification.service'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'

const specificationsRoutes = Router()
const specificationRepository = new SpecificationRepository()

specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createSpecificationService = new CreateSpecificationService(specificationRepository)
    createSpecificationService.execute({ name, description })

    return response.status(201).send()
})

// specificationsRoutes.get('/', (request, response) => {
//     const categories = specificationRepository.getAll()
//     return response.json(categories)
// })

export { specificationsRoutes }