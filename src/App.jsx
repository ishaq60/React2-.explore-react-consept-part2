
import './App.css'
import Friends from './Friend'


import Counter from './counter'
import Team from './team'
import User from './user'


function App() {

  function handaleClick(){
    alert('button click')
  }
 
const handaleClick2=()=>{
  alert('button 2 clicked')
  
}
const addTOfive=(num)=>{
alert(num+5);
}
  return (
    <>
  
      <h3> React Core concept 2</h3>
     <Friends></Friends>
   <User></User>
 <Team></Team>
     <Counter>Counter:</Counter>
      <button onClick={handaleClick} >Click Me</button>
      <button onClick={handaleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
     {/* vazillia  */}
      <button onClick={()=>addTOfive(3)}>Four</button>
     
   
    </>
  )
}

export default App
