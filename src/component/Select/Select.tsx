import React, {useEffect, useState,KeyboardEvent} from "react";
import s from "./Select.module.css"


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]

}

function Select(props: SelectPropsType) {
    let [active, setActive] = useState(false)
    let [hoverItemValue, setHoverItemValue] = useState(props.value)
    let selectedItem = props.items.find(f => f.value === props.value)
    let hoverItemsSelected = props.items.find(f => f.value === hoverItemValue)

    useEffect(()=>{
        setHoverItemValue(props.value)
    },[props.value])

    let toggleItems = () => setActive(!active)
    let onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
const onKeyUp=(e:KeyboardEvent<HTMLDivElement>)=>{
        if(e.key==="ArrowDown"||e.key==="ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverItemValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if(e.key==="Enter"||e.key==="Escape"){
            setActive(false)
        }
}

    return (
        <>
            {/*<select>*/}
            {/*    <option value={"1"}>Minsk</option>*/}
            {/*    <option value={"2"}>Moscow</option>*/}
            {/*    <option value={"3"}>Kiev</option>*/}

            {/*</select>*/}
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                <div className={s.items}>
                    {props.items.map(i => < div
                        onMouseEnter={()=>{setHoverItemValue(i.value)}}
                        className={s.item + " " + (hoverItemsSelected === i ? s.selected : "")}
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }}
                    >{i.title}</div>)}
                </div>
                }
            </div>
        </>
    )
}

export default Select;