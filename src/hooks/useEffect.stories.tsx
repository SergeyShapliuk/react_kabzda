import React, {useEffect, useState} from "react";


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