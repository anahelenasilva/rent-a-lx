import { inject, injectable } from 'tsyringe'
import { hash } from 'bcrypt'
import { ICreateUserDto } from '../../../../modules/accounts/dtos/ICreateUserDto'
import { IUserRepository } from '../../../accounts/repositories/IUserRepository'
import { AppError } from '../../../../errors/app.error'

@injectable()
class CreateUserUsecase {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository) {
    }

    async execute({ drivers_license, email, name, password, username }: ICreateUserDto): Promise<void> {
        const user = await this.userRepository.getByEmail(email)
        if (user) {
            throw new AppError('User already exists')
        }

        const passwordHash = await hash(password, 10)

        await this.userRepository.create({
            drivers_license,
            email,
            name,
            password: passwordHash,
            username
        })
    }
}

export { CreateUserUsecase }