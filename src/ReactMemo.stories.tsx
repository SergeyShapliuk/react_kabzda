import React, {useState} from "react";


export default {
    title:"React.memo demo",

}


const Counter=(props:{count:number})=>{
    return <div>
        {props.count}
    </div>
}

const User=(props:{users:string[]})=>{
    console.log("Users")
return <div>{
    props.users.map((u, i) => <div>{u}</div>)
}</div>
}
const UserMemo=React.memo(User)

export function Example(){
    const [counter,setCounter]=useState(0)
    const [users,setUsers]=useState(["Dimych","Valera","Artem"])
    return <>
    <button onClick={()=>setCounter(counter+1)}>+</button>
        <Counter count={counter}/>
        <UserMemo users={users}/>

    </>
}
