import { useState } from 'react'
import Tab from './Pages/Tab'
import AppRoutes from './Routes'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
          <AppRoutes {...props} />
      </div>
    </>
  )
}

export default App
