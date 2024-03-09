import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
   
    const handaleAdd=()=>{
    const newcount=count+1;
    setCount(newcount)
    }
    const handaleRuduce =()=>{
        const newCount=count-1;
        setCount(newCount)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handaleAdd}>Add</button>
            <button onClick={handaleRuduce}>Reduce</button>
        </div>
    )
}