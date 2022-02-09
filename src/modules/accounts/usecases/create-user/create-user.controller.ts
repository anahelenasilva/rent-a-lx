import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUsecase } from "./create-user.usecase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { drivers_license, email, name, password, username } = request.body;
        const createUserUsecase = container.resolve(CreateUserUsecase);
        await createUserUsecase.execute({
            drivers_license,
            email,
            name,
            password,
            username
        })

        return response.status(201).send()
    }
}

export { CreateUserController }