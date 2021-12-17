import React, {useState} from "react";

type OnOffPropsType = {
    onChange:(switchOn:boolean)=>void
}

function OnOff(props: OnOffPropsType) {
   let[on,setOn]=useState<boolean>(true)

const onStyle={
    width:"35px",
    height:"30px",
    border:"2px solid black",
    display:"inline-block",
    marginRight:"5px",
    backgroundColor:on?"green":"white"
}
const offStyle={
    width:"35px",
    height:"30px",
    border:"2px solid black",
    display:"inline-block",
    marginRight:"5px",
    backgroundColor:!on?"red":"white"
}
const indicatorStyle={
    width:"25px",
    height:"25px",
    borderRadius:"25px",
    border:"2px solid black",
    display:"inline-block",
    backgroundColor:on?"green":"red"

}

    return (
        <div>
            <hr/>
<div style={onStyle} onClick={()=>{
    setOn(true)
props.onChange(false)
}
}>on</div>
<div style={offStyle} onClick={()=>{setOn(false)}}>off</div>
<div style={indicatorStyle}>l</div>



    </div>
    )
}

export default OnOff;