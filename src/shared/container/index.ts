import { container } from 'tsyringe'

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoryRepository } from '../../modules/cars/repositories/CategoryRepository'

import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'
import { SpecificationRepository } from '../../modules/cars/repositories/SpecificationRepository'

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository)
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository)
