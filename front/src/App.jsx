import { useState } from 'react'
import ListOfCharacters from './components/ListOfCharacters';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ListOfCharacters />
      </div>
    </>
  )
}

export default App;
