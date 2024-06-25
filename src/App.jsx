import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import './App.css'
import ContactPage from './Pages/ContactPage'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import HeartPage from './Pages/HeartPage'
import BasketPage from './Pages/BasketPage'
function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>} />
    <Route path='/signup' element={<SignUpPage/>}/>
    <Route path='/singin' element={<LoginPage/>}/>
    <Route path='/heart' element={<HeartPage/>}/>
    <Route path='/basket' element={<BasketPage/>}/>
    
  </Route>
</Routes>
    </>
  )
}

export default App
