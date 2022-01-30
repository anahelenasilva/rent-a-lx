import { Request, Response } from 'express';
import { GetAllCategoriesUseCase } from './get-all-categories.usecase';

class GetAllCategoriesController {
    constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) { }

    handle(request: Request, response: Response): Response {
        const categories = this.getAllCategoriesUseCase.execute()
        return response.json(categories)
    }
}

export { GetAllCategoriesController }