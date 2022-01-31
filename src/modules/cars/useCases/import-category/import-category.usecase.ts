import fs from 'fs'
import { parse as csvParse } from 'csv-parse'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'

interface IIMportCategory {
    name: string
    description: string
}

class ImportCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IIMportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: IIMportCategory[] = []

            const parser = csvParse()
            stream.pipe(parser)

            parser
                .on('data', async (line) => {
                    const [name, description] = line
                    categories.push({
                        name,
                        description
                    })
                })
                .on('end', () => {
                    resolve(categories)
                })
                .on('error', (err) => {
                    reject(err)
                })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)

        categories.map(async category => {
            const { name, description } = category

            const categoryExists = this.categoryRepository.getByName(name)
            if (!categoryExists) {
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportCategoryUseCase }