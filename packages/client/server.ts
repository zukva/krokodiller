import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer, ViteDevServer } from 'vite'
import serialize from 'serialize-javascript'
import createEmotionServer from '@emotion/server/create-instance'
import cors from 'cors'
import helmet from 'helmet'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProdMode = process.env.NODE_ENV === 'production'

async function createServer() {
  const app = express()
  app.set('trust proxy', 'loopback')

  let vite: ViteDevServer

  if (isProdMode) {
    const serveStatic = await import('serve-static')
    const dist = path.resolve(__dirname, 'dist/client')
    app
      .use(
        serveStatic.default(dist, {
          index: false,
        })
      )
      .use(
        cors({
          credentials: true,
          origin: process.env.VITE_CLIENT_PATH,
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
  } else {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })

    app.use(vite.middlewares)
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template
      let entryServer
      if (isProdMode) {
        template = fs.readFileSync(
          path.resolve('dist/client/index.html'),
          'utf-8'
        )
        // @ts-ignore
        entryServer = await import('./dist/server/entry-server.cjs')
      } else {
        template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        )
        template = await vite.transformIndexHtml(url, template)
        entryServer = await vite.ssrLoadModule('/src/entry-server.tsx')
      }

      const store = entryServer.configureStore()
      const preloadedState = store.getState()

      const appHtml = await entryServer.render(url, store)

      const cache = entryServer.cache

      // prettier-ignore
      // @ts-ignore
      const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer.default(cache)

      const emotionChunks = extractCriticalToChunks(appHtml)
      const emotionCss = constructStyleTagsFromChunks(emotionChunks)

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(
          `<!--app-state-->`,
          `<script>window.__PRELOADED_STATE__=${serialize(
            preloadedState
          )}</script>`
        )
        .replace(`<!--css-->`, emotionCss)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: any) {
      if (!isProdMode) {
        vite.ssrFixStacktrace(e)
      }
      next(e)
    }
  })

  return { app }
}

createServer().then(({ app }) => {
  const port = process.env.CLIENT_PORT || 3000
  app.listen(port, () => {
    console.log(`App on http://localhost:${port}`)
  })
})
