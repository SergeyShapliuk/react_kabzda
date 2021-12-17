import React from "react";



type StarPropsType = {
     selected: boolean
    setSelected:()=>void



}

function Star2(props: StarPropsType) {

    return <span onClick={()=>{props.setSelected()}}>

        {props.selected?<b>star</b>:"star"}
    </span>


}

export default Star2;