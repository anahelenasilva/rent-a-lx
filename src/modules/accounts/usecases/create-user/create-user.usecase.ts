import { inject, injectable } from 'tsyringe'
import { hash } from 'bcrypt'
import { ICreateUserDto } from '../../../../modules/accounts/dtos/ICreateUserDto'
import { IUserRepository } from '../../../accounts/repositories/IUserRepository'

@injectable()
class CreateUserUsecase {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository) {
    }

    async execute({ drivers_license, email, name, password, username }: ICreateUserDto): Promise<void> {
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