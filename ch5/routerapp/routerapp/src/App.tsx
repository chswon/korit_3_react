import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          { ' | ' } 
          <Link to="/Contact">Contact</Link>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
