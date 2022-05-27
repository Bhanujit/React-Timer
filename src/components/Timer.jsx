import React from 'react'
import './Timer.css'
import { useState,useEffect } from 'react'
export const Timer = () => {
    const [input,setInput] = useState("")
    const [start,setStart] = useState(false)
    const [value,setValue] = useState(0)

    function submitHandler(){
        let x = +input
        setValue(x)
        setInput("")
       
    }
    function startCountDown(){
        if(value>0){
            setTimeout(() => {
                setValue(value - 1)
            }, 1000);
        }   
    }
   useEffect(()=>{
    startCountDown()
   },[value])
 
  return (
    <div>
        <div className="container">
        <div className="up">
                <h1>{value} Seconds</h1>
            </div>
            <div className='btn-wrapper'>
                <input value={input} type="number" className='inp' onChange={(e)=>{setInput(e.target.value)}} placeholder= 'set timer.....'/>
                <button onClick={()=>{submitHandler()}} className='btn'>Enter</button>
            </div>
        </div>
    </div>
  )
}

// setTimeout(() => {
//     setTimer(timer+1)
// }, 1000);