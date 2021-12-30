import React, {memo} from "react";
import s from './Clock.module.css'




const MinuteHand = (props:any) => {
    return (
        <div className={s["minute-hand"]}
            style={{ transform: `rotate(${props.minuteHandAngle}deg)` }}>

            <div className={s["visible-part-min-hand"]}
                style={{ background: props.color }}>

            </div>
        </div>
    )
}

export default memo(MinuteHand, (props, nextProps):any => {
    if (props.minuteHandAngle === nextProps.minuteHandAngle) {
        return true
    }
})