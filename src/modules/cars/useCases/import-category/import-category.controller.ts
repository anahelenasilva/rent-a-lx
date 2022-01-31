import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './import-category.usecase'

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) { }

    handle(request: Request, response: Response) {
        const { file } = request
        this.importCategoryUseCase.execute(file)
        return response.send('ok')
    }
}

export { ImportCategoryController }