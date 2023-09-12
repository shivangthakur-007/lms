import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import HomeLayouts from './Layouts/HomeLayouts'
import HomePage from './Pages/HomePages'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
    
    </Routes>
    </>
  )
}

export default App
