import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
</>
  )
}

export default App
