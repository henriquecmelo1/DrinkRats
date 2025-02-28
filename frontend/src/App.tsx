import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayerCard from './components/PlayerCard'
import DrinkPoints from './components/DrinkPoints'
import User from './components/User'
import UserRank from './components/UserRank'

function App() {

  return (
    <div className='row ms-1 justify-content-evenly'>

      <UserRank name='Henrique' points={123}/>
      <PlayerCard name='João'/>
      <DrinkPoints name='cerveja' points={20} description='descrição'/>
      <User name='Guilherme'/>
      
    </div>
  
  )
}

export default App
