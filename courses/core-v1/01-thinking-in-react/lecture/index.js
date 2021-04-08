import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MdShoppingCart } from 'react-icons/md'
import 'YesterTech/styles/global-styles.scss'
import './styles.scss'

function Button(props) {
  let Icon = props.icon
  return (
    <button className="button">
      {props.children}
      <span>
        <Icon />
      </span>
    </button>
  )
}

// Let's go
function App() {
  return (
    <div>
      <Button>
        Go to Cart <MdShoppingCart />
      </Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
