import React, {useEffect, useState} from "react";


const getTwoDigital=(number:number)=>number<10?'0'+number:number


function Clock(){
    const [date,setDate]=useState(new Date())

    useEffect(()=>{
        console.log('useEffect')
        const intervalId=setInterval(()=>{
            console.log('tick')
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[])


    return(
        <div>
            {getTwoDigital(date.getHours())}:{getTwoDigital(date.getMinutes())}:{getTwoDigital(date.getSeconds())}
        </div>
    )
}
export default Clock;