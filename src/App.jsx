import Title from "./components/Title.jsx"
import NameLength from "./components/NameLength.jsx"
import NameReversed from "./components/NameReversed.jsx"
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}></Title>
      <NameLength name={name}></NameLength>
      <NameReversed name={name}></NameReversed>
    </div>
  )
}
export default App 