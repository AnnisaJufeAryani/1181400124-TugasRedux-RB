import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <APP />
    </Provider>
    document.getElementById('root')
)