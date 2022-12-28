import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import express from 'express'
import { createClientAndConnect } from './db'
import router from './router'
import errorMiddleware from './middlewares/error.middleware'

const app = express()
app
  .use(cors({ credentials: true, origin: `http://localhost:${process.env.CLIENT_PORT}` }))
  .use(express.json())
  .disable('x-powered-by')
  // .enable('trust proxy')
  // .set('query parser', queryParser)
  // .use(cookieParser())
  // .use(logger)
  .use(router)
  .use(errorMiddleware)
// .use(notFound);
const port = Number(process.env.SERVER_PORT) || 3001

createClientAndConnect()

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})
