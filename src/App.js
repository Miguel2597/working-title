import { useState, useMemo } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { IndexContext } from './components/IndexContext'
import Navbar from './components/Navbar'
import Routes from './routes/Routes'

export default function App() {

  const [selectedIndex, setSelectedIndex] = useState(0)

  const providerValue = useMemo(() => ({ selectedIndex, setSelectedIndex }), [selectedIndex, setSelectedIndex])

  return (
    <Router>
      <IndexContext.Provider value={providerValue}>
        <Navbar></Navbar>
        <div className='content'>
          <Routes></Routes>
        </div>
      </IndexContext.Provider>
    </Router>
  )
}

