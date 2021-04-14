import React, { useContext, useRef, useEffect } from 'react'
import { Heading } from 'ProjectPlanner/Heading'
import { getTheme } from './utils'
import 'ProjectPlanner/styles/global-styles.scss'
import './styles.scss'

////////

const Context = React.createContext()

export function ThemeProvider({ children }) {
  const [colors, setColors] = React.useState(getTheme())

  const context = {
    colors,
    setColors,
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export function useTheme() {
  const context = useContext(Context)
  if (!context) {
    throw Error('We are not inside of a ThemeProvider')
  }

  return context
}

//////////

export const App = () => {
  return (
    <ThemeProvider>
      <PrimaryLayout />
    </ThemeProvider>
  )
}

///////////

const PrimaryLayout = React.memo(() => {
  return <Board />
})

const Board = () => {
  return <TaskCard />
}

const TaskCard = () => {
  const taskRef = useRef()

  const { colors, setColors } = useTheme()

  useEffect(() => {
    taskRef.current.style.setProperty(`--taskColor`, colors.blue)
  }, [colors])

  return (
    <div className="task-card spacing" ref={taskRef}>
      <Heading>Task Card</Heading>
      <span>{colors?.blue}</span>
      <button
        onClick={() => {
          setColors({ ...colors, blue: colors.green })
        }}
      >
        Make blue look green
      </button>
    </div>
  )
}
