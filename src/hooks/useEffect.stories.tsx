import React, {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";
import {log} from "util";


export default {
    title: 'useEffect'
}


export function Example() {
    const [fake, setFake] = useState(0)
    const [count, setCount] = useState(0)
    console.log('Example')

    useEffect(() => {
        console.log('useEffect all ready')
        document.title = count.toString()
    })
    useEffect(() => {
        console.log('useEffect only one')
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect only count change')
        document.title = count.toString()
    }, [count])

    return <>
        count: {count} fake: {fake}
        <button onClick={() => setCount(count + 1)}>count</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>

    </>
}

export function SetTimeOutExample() {
    const [fake, setFake] = useState(0)
    const [count, setCount] = useState(0)
    console.log('Example')
    useEffect(() => {
        console.log('useEffect')
        const intervalId = setInterval(() => {
            console.log('setTimeOut')

            document.title = count.toString()
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }

    }, [count])


    return <>
        count: {count} fake: {fake}
        {/*<button onClick={()=>setCount(count+1)}>count</button>*/}
        {/*<button onClick={()=>setFake(fake+1)}>fake</button>*/}

    </>
}
export function ResetEffectExample(){
    const [count,setCount]=useState(1)

    console.log('Component rendering with ' + count)

    useEffect(()=>{
       console.log('Effect occurred '+  count)
    return ()=>{
        console.log("Reset Effect"+count)

    }

    },[count])
    const increase=()=>setCount(count+1)

    return(
        <>
Hello counter:{count}<button onClick={increase}>+</button>
        </>
    )

}
export function KeyTrackerExample(){

    const [text,setText]=useState('')
    console.log('Component rendering with ' + text)
const handler=(e:KeyboardEvent)=>{
    console.log(e.key)
    setText(state=> state+e.key)}
    useEffect(()=> {
        console.log('Effect '+text)
window.addEventListener('keypress',handler
)
        return ()=>{
            console.log('reset '+text)
            window.removeEventListener('keypress',handler)
        }
    },[text])
    return(
        <>
Typed text:{text}
        </>
    )

}