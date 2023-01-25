import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
dotenv.config()

import express from 'express'
import { createClientAndConnect } from './db'
import router from './router'
import errorMiddleware from './middlewares/error.middleware'

const app = express()
app
  .use(
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === 'production'
          ? 'https://zukva.ya-praktikum.tech'
          : `http://localhost:${process.env.CLIENT_PORT}`,
    })
  )
  .use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: `'self' *.ya-praktikum.tech`,
        styleSrc: [
          `'self'`,
          `'unsafe-inline'`,
          `fonts.googleapis.com`
        ],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin'},
  }))
  .use(express.json())
  .enable('trust proxy')
  .use(morgan('combined'))
  .use(router)
  .use(errorMiddleware)
const port = Number(process.env.SERVER_PORT) || 3001

createClientAndConnect()

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})
