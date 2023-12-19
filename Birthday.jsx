import React, { useEffect, useState } from 'react'
 import Data from './Data'
 import './Birthday.css'

const App = () => {
  const[data,setData]=useState(Data)
   useEffect(()=>{
      fetch(data)
      .then((res)=>res.json())
      .then(d=>setData(d)) 
    })
   return (
     <div className='Body'>
       <div className="card">
       <div className="head">
         <h1>Today Birthday</h1>
       </div>
       {data.map((e)=>{
         return(
          <section key={e.id}> 
             <img src={e.image} />
             <div className='info'>
               <h1>{e.name}</h1>
               <p>{e.age}</p>
             </div> 
           </section>
         )
       })}
       <button onClick={()=>setData([])}>clear</button>
       </div>
     </div>
   )
 }

 export default App
