import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './global.css'

function App() {
  return <p>Hello World!</p>
}

const root = document.body.querySelector('#root')
ReactDOM.render(<App />, root)
