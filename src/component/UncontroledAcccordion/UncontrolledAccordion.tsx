import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";


type AccordionType={
    title:string

}

export function UncontrolledAccordion(props:AccordionType) {
    // const [collapsed,setCollapsed]=useState(true)
    const [stateCollapsed,dispatch]=useReducer(reducer,{collapsed:false})


    // const onCollapsed=()=>setCollapsed(!collapsed)
    const onCollapsed=()=>dispatch({type:TOGGLE_COLLAPSED})


    return (
        <div>
            <AccordionTitle title={props.title} onClick={onCollapsed}/>
            {!stateCollapsed.collapsed && <AccordionBody/>}


        </div>
    )
}
type AccordionTitleType={
    title:string
    onClick:()=>void
}
export function AccordionTitle(props:AccordionTitleType){
    return(
        <div>
            <h3 onClick={props.onClick}>{props.title}</h3>
        </div>
    )
}
export function AccordionBody(){
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>

        </div>
    )
}