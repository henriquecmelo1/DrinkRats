import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayerCard from './components/PlayerCard'
import DrinkPoints from './components/DrinkPoints'
import DrinkAmount from './components/DrinkAmount'

function App() {

  return (
    <div className='row ms-1 justify-content-evenly'>
      <PlayerCard />
      <DrinkPoints />
      <DrinkAmount />
    </div>
  
  )
}

export default App
