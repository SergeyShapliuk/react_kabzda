import React, {useMemo, useState} from "react";


export default {
    title: "SelectMemo",
}


export function HelpsToSelect() {
    console.log("HelpsToSelect")
    const [counter, setCounter] = useState<number>(0)
    const [select, setSelect] = useState<any>([
        {id: 1, title: "Moscow", country: "Russia", citizen: 11000},
        {id: 2, title: "St.Petersburg", country: "Russia", citizen: 10000},
        {id: 3, title: "Kiev", country: "Ukrain", citizen: 10000},
        {id: 4, title: "Odessa", country: "Ukrain", citizen: 80000},
        {id: 5, title: "Minsk", country: "Belarus", citizen: 10000},
        {id: 6, title: "Borisov", country: "Belarus", citizen: 1500}

    ])
    const newTitle = useMemo(() => {
        return select.filter((f: any) => f.country === "Ukrain")
    }, [])

    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Example1Memo select={newTitle}/>

    </>
}


const Example1 = (props: { select: any }) => {
    console.log("Example1")
    return <div>
        <select>
               {
                   props.select.map((f: any) => <option>{f.title}</option>)
            }

        </select>
    </div>

}
const Example1Memo = React.memo(Example1)