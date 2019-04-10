import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = window.jQuery = require('jquery/dist/jquery.min')
require('bootstrap/dist/js/bootstrap.min')

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))


