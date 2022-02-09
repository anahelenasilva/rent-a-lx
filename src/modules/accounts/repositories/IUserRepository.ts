import { ICreateUserDto } from "../dtos/ICreateUserDto"
import { User } from "../models/user"

interface IUserRepository {
    create(data: ICreateUserDto): Promise<void>
    getByEmail(email: string): Promise<User>
}

export { IUserRepository }