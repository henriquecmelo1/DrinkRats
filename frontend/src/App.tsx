import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route } from 'react-router-dom'

import Players from './pages/Players'
import Drinks from './pages/Drinks'
import Ranking from './pages/Ranking'
import Loggings from './pages/Loggings'




function App() {

  return (
    <div className='row justify-content-evenly m-0'>

      <Routes>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/players" element={<Players />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/" element={<Loggings />} />
      </Routes>
    </div>


  
  )
}

export default App
