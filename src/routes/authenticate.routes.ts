import { Router } from 'express'
import { AuthenticateUserController } from '../modules/accounts/usecases/authenticate-user/authenticate-user.controller'

const authenticateRoutes = Router()
const authenticateUserController = new AuthenticateUserController()
authenticateRoutes.post('/sessions', authenticateUserController.handle)

export { authenticateRoutes }