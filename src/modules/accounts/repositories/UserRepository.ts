import { Repository } from "typeorm";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { User } from "../models/user";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>

    async create({ drivers_license, email, name, password, username }: ICreateUserDto): Promise<void> {
        const user = this.repository.create({
            drivers_license,
            email,
            name,
            password,
            username
        })

        await this.repository.save(user)
    }

    async getByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email })
        return user
    }

    async getById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
        return user
    }
}

export { UserRepository }