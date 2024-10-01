import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Guess the Cartoon Show!</h1>
        <h4>Test your knowledge on cartoon shows! Let's see how many you recognize!</h4>
        <h5>Total Cards: 6</h5>
      </div>
      <div class="card">
      </div>
      <div class="nextbutton">
      <button>Next Card</button>
      </div>

    </>    
  )
}

export default App
