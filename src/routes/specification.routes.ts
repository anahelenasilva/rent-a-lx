import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/create-specification'

const specificationsRoutes = Router()

specificationsRoutes.post('/', (request, response) => {
    return createSpecificationController.handle(request, response)
})

// specificationsRoutes.get('/', (request, response) => {
//     const categories = specificationRepository.getAll()
//     return response.json(categories)
// })

export { specificationsRoutes }