import React, { useEffect } from 'react'
import "./App.css"
import  {statsData} from "./Data"
import { useState } from 'react'
let array;

function Header() {
    const [Year,setYear]=useState()
    const [innertext,setInnerText]=useState("")
    
    function handel(e){
       setYear(e.target.value)
        
        
    }

  function value1(e){
       setInnerText(e.target.innerHTML)
  }

    useEffect(()=>{
         console.log(Year)
         console.log(innertext)
    },[Year])
    array=Object.entries(statsData)
    console.log(array)
  return (
    <div>
       <h1>IPL Dashbord</h1>

       <nav>
         <ul className='flex' onClick={value1}>
        
            <li >
orangeCap
</li>
            <li >
mostFours
</li>
            <li >mostSixes
</li> 
            <li >mostCenturies
</li>
            <li >
mostFifties
</li>
         </ul>
       </nav>

      <select name="" id="" onChange={handel}>
        <option value="" selected disabled>Select Year</option>
        <option value={2025}>2025</option>
        <option value={2024}>2024</option>
      </select>



      <div className='main'>
          { 
             array.map((item,index)=>{
                if(item[0]==Year && innertext ){
                return(
 <table>
                   <thead>
 <tr>                      
                          <th>Rank</th>
                          <th>Player</th>
                          <th>{innertext}</th>

                       </tr>
                   </thead>
                      <tbody>
 <tr>
                        {  
                          item[1][innertext].map((item)=>{
                      return (
                           <div>                      
                            <td>{index++}</td>
                           <td>{item.player}</td>
                        <td>{Object.values(item)[1]}</td>
                        </div>       
                      )
                         
                           
                
                          
                              
                          }

                                
                                
                           )
                         }
                       
                       </tr>
                      </tbody>
                      

                    </table>
                )
                
                 
                    
                }
                
             })

          }
      </div>
    </div>
  )
}

export default Header
