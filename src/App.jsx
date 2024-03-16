import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
 
 let[calvalue,setcalvalue]=useState("")
function buttonclicked(item) {
if (item=='AC') {
  setcalvalue("")
  
}
else if (item=='=') {
  let finalans=eval(calvalue)
  setcalvalue(finalans)
  
}
else{
  let displayvalue=calvalue+item;
  setcalvalue(displayvalue)
}
  
}
  return (
    <>
    <h1>Calculator</h1>
     <div className="container-body">
      <Display calvalue={calvalue}/>
      <Buttons buttonclicked={buttonclicked} />
     </div>
    </>
  )
}

export default App
