import React from 'react'
import ReactDOM from 'react-dom'
import { FaTrash } from 'react-icons/fa'
import 'ProjectPlanner/styles/global-styles.scss'
import './styles.scss'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}

function App() {
  function onClick(id) {
    console.log('click', id)
  }

  return (
    <div>
      <Button onClick={onClick}>
        <span>Remove Task</span>
        <FaTrash color="red" />
      </Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
