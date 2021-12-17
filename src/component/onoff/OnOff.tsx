import React from "react";

type OnOffPropsType = {
on:boolean
    off:(on:boolean)=>void
}

function OnOff(props: OnOffPropsType) {


const onStyle={
    width:"35px",
    height:"30px",
    border:"2px solid black",
    display:"inline-block",
    marginRight:"5px",
    backgroundColor:props.on?"green":"white"
}
const offStyle={
    width:"35px",
    height:"30px",
    border:"2px solid black",
    display:"inline-block",
    marginRight:"5px",
    backgroundColor:!props.on?"red":"white"
}
const indicatorStyle={
    width:"25px",
    height:"25px",
    borderRadius:"25px",
    border:"2px solid black",
    display:"inline-block",
    backgroundColor:props.on?"green":"red"

}

    return (
        <div>
            <hr/>
<div style={onStyle} onClick={()=>{props.off(true)}}>on</div>
<div style={offStyle} onClick={()=>{props.off(false)}}>off</div>
<div style={indicatorStyle}>l</div>



    </div>
    )
}

export default OnOff;