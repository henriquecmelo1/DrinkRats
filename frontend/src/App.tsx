import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import PlayerModal from './components/PlayerModal'


import Players from './pages/Players'
import Drinks from './pages/Drinks'
import Ranking from './pages/Ranking'


function App() {

  return (
    <div className='row justify-content-evenly'>

      
      {/* <Ranking /> */}
      {/* <Drinks /> */}
      
      <Players />
      
      {/* <PlayerModal /> */}

    </div>
  
  )
}

export default App
