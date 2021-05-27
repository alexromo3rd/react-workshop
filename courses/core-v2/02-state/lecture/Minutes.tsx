import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import 'ProjectPlanner/Minutes.scss'

// const states = []
// let calls = -1

// function useState(defaultState) {
//   const callId = ++calls

//   if (states[callId]) {
//     return states[callId]
//   }

//   function setState(newState) {
//     states[callId][0] = newState
//     calls = -1
//     rerender()
//   }

//   const state = [defaultState, setState]
//   states[callId] = state
//   return state
// }

// function rerender() {
//   ReactDOM.render(<Minutes />, document.getElementById('root'))
// }

export const Minutes = () => {
  const [minutes, setMinutes] = useState(0)
  const [error, setError] = useState(null)

  console.log(minutes, error)

  function subtract() {
    const nextMinutes = minutes - 1;
    setMinutes(minutes - 1)
    if (nextMinutes < 0) {
      setError('Cannot be less than 0')
    }
  }

  function add() {
    setMinutes(minutes + 1)
  }

  return (
    <div>
      <div className="minutes">
        <div>
          <button onClick={subtract} type="button">
            <FaMinusCircle />
          </button>
        </div>
        <div>{minutes}</div>
        <div>
          <button onClick={add} type="button">
            <FaPlusCircle />
          </button>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  )
}
