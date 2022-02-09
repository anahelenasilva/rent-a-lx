import { container } from 'tsyringe'

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoryRepository } from '../../modules/cars/repositories/CategoryRepository'

import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'
import { SpecificationRepository } from '../../modules/cars/repositories/SpecificationRepository'

import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository'
import { UserRepository } from '../../modules/accounts/repositories/UserRepository'

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository)
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository)
container.registerSingleton<IUserRepository>("UserRepository", UserRepository)