 import { useEffect, useState } from 'react'
import './Friend.css'
import Friend from './singaleFriend'
export default function Friends(){
    const [friend,setFriend]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())

        .then(data=>setFriend(data))

    },[])
    return(
        <div className='box'>
            <h3>Friend:{friend.length}</h3>
            {
                friend.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
    }
    /**
     * 1.state to declear hold data
     * 2.use effect with defendedy array
     * 3.use Effect to load data
     * 4.set loaded data the state
     */