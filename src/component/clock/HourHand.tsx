import React, {memo} from "react";
import s from './Clock.module.css'




const HourHand = (props:any) => {
    return (
        <div
            className={s["hour-hand"]}
            style={{ transform: `rotate(${props.hourHandAngle}deg)` }}
        >
            <div
                className={s["visible-part-hour-hand"]}
                style={{ background: props.color }}
            >

            </div>
        </div>
    )
}

export default memo(HourHand, (props, nextProps):any => {
    if (props.hourHandAngle === nextProps.hourHandAngle) {
        return true
    }
})