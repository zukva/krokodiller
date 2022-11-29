import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from './App'
import { render, screen } from '@testing-library/react'

const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  const mockStore = configureStore([thunk])
  render(
    <Provider store={mockStore({})}>
      <App />
    </Provider>
  )
  expect(screen.getByText(appContent)).toBeDefined()
})
