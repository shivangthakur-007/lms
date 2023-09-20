import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomeLayouts from './Layouts/HomeLayouts'
import "./App.css";
import HomePage from './Pages/HomePages'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import SignUp from './Pages/SIgnUp'
import Login from './Pages/Login'

function App() {

  
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
    
    </Routes>
    </>
  )


}

export default App
