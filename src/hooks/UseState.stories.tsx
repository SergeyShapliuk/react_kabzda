import React, {useState} from "react";


export default {

    title: "UseState demo",
};

function generated() {
    console.log("generator")
    return 1
}




export function Example() {

    console.log("example")
    const [count, setCount] = useState(generated)

    const counter2=(state:number)=>state+1
    console.log("counter2")
    return <>
        <button onClick={() => setCount(counter2)}>+</button>
        {count}
    </>

}
