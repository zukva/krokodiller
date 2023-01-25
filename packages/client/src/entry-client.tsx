import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { CacheProvider } from '@emotion/react'

import App from './App'
import { configureClientStore } from './store'
import createEmotionCache from './utils/createEmotionCache'

export const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() })

const store = configureClientStore(
  // @ts-ignore
  window.__PRELOADED_STATE__,
  routerMiddleware,
  routerReducer
)

// @ts-ignore
delete window.__PRELOADED_STATE__

const history = createReduxHistory(store)

const cache = createEmotionCache()

function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          );
        })
        .catch((error: string) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}
// if (import.meta.env.PROD) {
//   startServiceWorker();
// }

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </Router>
    </Provider>
  </React.StrictMode>
)
