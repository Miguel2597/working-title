import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Routes from './routes/Routes'

export default function App() {

	return (
		<Router>
    		<div>
        		<Navbar></Navbar>
        		<div className='content'>
          			<Routes></Routes>
        		</div>
    		</div>
    	</Router>
  )
}

