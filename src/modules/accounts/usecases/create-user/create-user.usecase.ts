import { ICreateUserDto } from "@modules/accounts/dtos/ICreateUserDto"
import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../../accounts/repositories/IUserRepository"

@injectable()
class CreateUserUsecase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository) {
    }

    async execute({ drivers_license, email, name, password, username }: ICreateUserDto): Promise<void> {
        await this.userRepository.create({
            drivers_license,
            email,
            name,
            password,
            username
        })
    }
}

export { CreateUserUsecase }