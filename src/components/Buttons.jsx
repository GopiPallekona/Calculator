import React from 'react'

const Buttons = ({buttonclicked}) => {
  const buttonNames=['AC','*','+','/','1','2','3','4','5','6','7','8','9','0','.','=']
  return (
    <div className="buttons">
       {buttonNames.map(item=><button onClick={()=>buttonclicked(item)}>{item}</button>)} 
    </div>
  )
}

export default Buttons
