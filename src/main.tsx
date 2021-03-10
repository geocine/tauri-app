import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logo from './logo.svg'

ReactDOM.render(
  <React.StrictMode>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
