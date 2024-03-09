import { useEffect, useState } from "react"

 export default function User(){
    const [user,setUser]=useState([])
    useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res=>res.json())
 .then (data=>setUser(data))
    },[])
    return(
        <div>
       <h3>user:{user.length}</h3>
        </div>
    )
 }
// 1.decelar a state hold the data
// 2.useEffect with call back and dependentcy
// 3.use fetch load data