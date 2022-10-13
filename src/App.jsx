import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Secondtitle from './Component/Secondtitle'
import ThirdPage from './Component/ThirdPage'
import Fourthpage from './Component/Fourthpage'
function App() {
 
  return (
   <div>
    <Navbar/>
    <Header/>
    <Secondtitle/>
    <ThirdPage/>
    <Fourthpage/>
   </div>
  )
}

export default App
