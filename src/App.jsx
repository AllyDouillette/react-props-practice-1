import { useState } from 'react'
import { reverse } from './helpers'

function App() {
  const [name, setName] = useState('Nicolas')

  function printGreeting () {
    return (
      <h1 className="title">Welcome, {name}!</h1>
    )
  }

  function printNameLength () {
    return ( 
    <p className="name-length">
      Did you know that {name} is {name.length} characters long?!
    </p>
    )
  }

  function printReverseName () {
    return (
      <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    )
  }

  return (
    <div className="app">
      {printGreeting()}
      {printNameLength()}
      {printReverseName()}
    </div>
  )
}

export default App
