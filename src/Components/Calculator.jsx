import React from 'react'
import { useState } from 'react'

const Calculator =()=> {
    const [data, setData] = useState("")
    const clickHandler = (e)=>{
        setData(data + e.target.value)
    }
    const buttons = []
    [9,8,7,6,5,4,3,2,1,".","%"].map(item =>(
        buttons.push(
            <button onClick={clickHandler} value={item} key={item}></button>
        )
    ))
  return (
    <div className='m-auto'>Calculator</div>
  )
}

export default Calculator