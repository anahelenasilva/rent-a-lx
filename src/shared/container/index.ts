import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoryRepository } from '../../modules/cars/repositories/CategoryRepository'
import { container } from 'tsyringe'

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository)