import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayerCard from './components/PlayerCard'
import DrinkPoints from './components/DrinkPoints'
import DrinkAmount from './components/DrinkAmount'
import User from './components/User'
import UserRank from './components/UserRank'

function App() {

  return (
    <div className='row ms-1 justify-content-evenly'>
      <UserRank/>
      
    </div>
  
  )
}

export default App
