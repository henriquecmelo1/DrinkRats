import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import Players from './pages/Players'
import Drinks from './pages/Drinks'
import Ranking from './pages/Ranking'
import Loggings from './pages/Loggings'

import PlayerCard from './components/PlayerCard'




function App() {

  const log = {
    drinkName: "Cerveja",
    time: "20:00",
    date: "2023-10-01"
  }

  return (
    <div className='row justify-content-evenly'>

      
      {/* <Ranking /> */}
      {/* <Players /> */}
      {/* <Drinks /> */}
      <Loggings />


    </div>
  
  )
}

export default App
