import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/state'
import App from './App'
import 'normalize.css'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
      />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
