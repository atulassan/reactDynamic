import AppRoutes from './Routes'
import './App.css'

function App(props) {

  return (
    <>
      <div className='app'>
          <AppRoutes {...props} />
      </div>
    </>
  )
}

export default App
