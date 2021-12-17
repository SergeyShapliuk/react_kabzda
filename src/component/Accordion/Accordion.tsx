
import React from "react";

type AccordionType={
    title:string
    collapsed:boolean
    setCollapsed:(collapsed:boolean)=>void


}
export function Accordion(props:AccordionType) {

    const onCollapsed=()=>props.setCollapsed(!props.collapsed)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={onCollapsed}/>
            {props.collapsed && <AccordionBody/>}


        </div>
    )
}
export default Accordion;


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