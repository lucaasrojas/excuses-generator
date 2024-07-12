import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { getLiveExcuse } from 'lorem-excuses'

function App() {
  const [excuse, setExcuse] = useState("")

  useEffect(() => {
    getLiveExcuse().then(excuse => setExcuse(excuse))
  }, [])

  return (
    <>
      <h1>{excuse}</h1>
    </>
  )
}

export default App
