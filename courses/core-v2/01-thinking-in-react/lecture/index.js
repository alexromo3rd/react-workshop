import React from 'react'
import ReactDOM from 'react-dom'
// import { FaTrash } from 'react-icons/fa'
import 'ProjectPlanner/styles/global-styles.scss'
import './styles.scss'

function App() {
  return (
    <div>
      <button className="button">Remove Task</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
