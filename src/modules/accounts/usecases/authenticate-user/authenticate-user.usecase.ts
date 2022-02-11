import { inject } from 'tsyringe'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { IUserRepository } from '../../repositories/IUserRepository'

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

class AuthenticateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.getByEmail(email)
        if (!user) {
            throw new Error('Email or password is invalid')
        }

        const isPasswordValid = await compare(password, user.password)
        if (!isPasswordValid) {
            throw new Error('Email or password is invalid')
        }

        const token = sign(
            { userId: user.id },
            'c65415a1e71c604075ec15799e54aae3',
            { subject: user.id, expiresIn: '1d' })


        return {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
    }
}

export { AuthenticateUserUseCase }