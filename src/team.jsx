import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const handaleAdd=()=>{
      const Newteam=team+1;
       setTeam(Newteam)
    }
       const handaleReduce=()=>{
        const NewReduceteam=team-1;
        setTeam(NewReduceteam)
       }
   
    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>player:{team}</h3>
            <button onClick={handaleAdd}>Add Player</button>
            <button onClick={handaleReduce}>Reduce</button>
        </div>
    )
}