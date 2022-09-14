import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
// import './index.css'
import Navbar from './components/Navbar'
import Puppy from './components/Puppy'
import RandomImages from './components/RandomImages'
import Search from './components/Search'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/puppy/:itemName' element={<Puppy />} />
          <Route path='/search' element={<Search />} />
          <Route path='/random' element={<RandomImages/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
