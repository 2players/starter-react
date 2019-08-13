import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

import 'normalize.css'

function App() {
  return <Page />
}

const root = document.body.querySelector('#root')
ReactDOM.render(<App />, root)
