import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './6.Project/Home'
import Card from './6.Project/Card'
import Navbar from './6.Project/Navbar'
import About from './6.Project/Components/About'
import Data from  './6.Project/Data'
import Cart from './6.Project/Components/Cart'
import { useState } from 'react'

const App = () => {
  const[data,setData]=useState(Data)
  const[search,setsearch]=useState("")
  const[cart,setCart]=useState([])
  

  function handleClick(item){
    setCart([...Cart,item])
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar  data={data} setdata={setData} setsearch={setsearch} size={Card.length}/>
      <Routes>
        <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}/>
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='./about/:aboutId' element={<About Data={Data}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

