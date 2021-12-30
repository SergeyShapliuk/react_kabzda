import React from "react";
import s from './Clock.module.css'




const SecondHand = (props:any) => (
    <div
        className={s["second-hand"]}
        style={{ transform: `rotate(${props.secondHandAngle}deg)` }}
    >
        <div className={s["visible-part-sec-hand"]} style={{ background: props.color }}>

        </div>
    </div>
)

export default SecondHand