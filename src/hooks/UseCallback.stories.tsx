import React, {useCallback, useMemo, useState} from "react";



export default {
    title:"UseCallback",
}





const Book=(props:{books:string[],addBook:()=>void})=>{

    console.log("Books")
    return <div>
        <button onClick={props.addBook}>addBook</button>
        {
        props.books.map((u, i) => <div>{u}</div>)
    }</div>
}


const BookMemo=React.memo(Book)         //---------------React.memo


export function UseCallbackExample(){
    console.log("Counter")
    const [counter,setCounter]=useState(0)
    const [books,setBooks]=useState(["React","Css","Js"])



    const addBook = () => {
        const newBook=[...books,"Angular"+new Date().getTime()]
       setBooks(newBook)
    }

    const callbackBooks=useCallback(() => {
        addBook()
    },[books])

    // const callbackBooks=useMemo(() => {                --------useMemo----------
    //     return addBook
    // },[books])

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        {/*<button onClick={()=>addBook()}>addBook</button>*/}
        {counter}
        <BookMemo books={books} addBook={callbackBooks}/>

    </>
}