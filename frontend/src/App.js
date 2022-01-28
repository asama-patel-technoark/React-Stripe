import { useState } from 'react'
import './App.css'
import iphone from './assets/iphone.jpg'
import StripeContainer from './components/StripeContainer'

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className='App'>
      <h1>Iphone Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$800</h3>
          <img src={iphone} alt='Iphone' />
          <button onClick={() => setShowItem(true)}>Purchase Iphone</button>
        </>
      )}
    </div>
  )
}

export default App
