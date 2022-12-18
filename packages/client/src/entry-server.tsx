import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import { CacheProvider } from '@emotion/react'

import App from './App'
import { configureServerStore } from './store'
import createEmotionCache from './utils/createEmotionCache'

export const cache = createEmotionCache()

export const render = (url: string, store: Store) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </Provider>
    </StaticRouter>
  )
}

export const configureStore = configureServerStore
