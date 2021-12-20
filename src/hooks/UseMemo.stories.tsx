import React, {useMemo, useState} from "react";



export default {
    title:"UseMemo",
}



export function Example1(){
    const [a,setA]=useState<number>(0)
    const [b,setB]=useState<number>(0)

    let resultA=1
    let resultB=1

    resultA=useMemo(() =>{
        let tempResultA=1
        for (let i=1;i<=a;i++){
            let fake=0
            while (fake<100000000){
                fake++
                const fakeValue=Math.random()
            }
            tempResultA*=i
        }
        return tempResultA
    },[a] )

    for (let i=1;i<=b;i++) {
        resultB *= i
    }
    return <>
    <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
    <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
<hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>
    </>

}

const User=(props:{users:string[]})=>{

    console.log("Users")
    return <div>{
        props.users.map((u, i) => <div>{u}</div>)
    }</div>
}
const UserMemo=React.memo(User)

export function HelpsToReactMemo(){
    console.log("HelpsToReactMemo")
    const [counter,setCounter]=useState(0)
    const [users,setUsers]=useState(["Dimych","Valera","Artem"])

    const newArray=useMemo(() => {
        return users.filter(f=>f.toLowerCase().indexOf("a")>-1)
    },[users]);

    const addUser = () => {
        const newUser=[...users,"Sveta"+new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>addUser()}>addUser</button>
        {counter}
        <UserMemo users={newArray}/>

    </>
}