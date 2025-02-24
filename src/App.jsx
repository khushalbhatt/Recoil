import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  //wrap the Count component with CountContext.Provider
  return (
    <>
      <CountContext.Provider value={{count,setCount}} >
        <Count></Count>
      </CountContext.Provider>
    </>
  )
}

function Count() {

  return(
    <>
        <Countrender></Countrender>
        <Button></Button> 
    </>
  )
}

function Countrender() {
  const {count,setCount} = useContext(CountContext);
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

function Button() {
  const {count,setCount} = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount( count + 1)}>Increment</button>
      <button onClick={() => setCount( count - 1)}>Decrement</button>
    </div>
  )
}

export default App
