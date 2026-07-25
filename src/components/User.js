import { useEffect, useState } from "react"

const User = (props)=>{
    const [count] = useState(0);
    const [count1] = useState(2);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("interval called");
        }, 1000)

        return ()=>{
            clearInterval(timer)
        }
    })
    return(
        <div className="user-card">
                <h2>count = {count}</h2>
                <h2>count1 = {count1}</h2>
                <h3>Name : {props.name}</h3>
                <h3>City : Visakhapatnam</h3>
                <h3>Contact : 8919262972</h3>
        </div>
    )
}

export default User