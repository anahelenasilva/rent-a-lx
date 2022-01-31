import express from 'express'
import swaggerUi from 'swagger-ui-express'

import * as swaggerDocument from './swagger.json'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(router)

app.get('/', (req, res) => {
    return res.send('Hello World')
})

app.listen(3333, () => console.log('Server started on port 3333'))