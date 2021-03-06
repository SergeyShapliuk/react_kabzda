import React,{memo} from "react";
import s from './Clock.module.css'

const MinuteScale = (props:any) => {
    return (
        <div className={s["minute-scale"]}>
            {Array.from(Array(60).keys()).map((S) => (
                <div
                    key={S}
                    className="diameter"
                    style={{
                        transform: `rotate(${(S * 360) / 60}deg)`,
                        position: `absolute`,
                        top: `49.5%`,
                        left: "0%",
                        width: `100%`,
                        height: `1%`,
                    }}
                >
                    <div
                        className="M"
                        style={{
                            position: `absolute`,
                            backgroundColor: props.color,
                            borderRight: `2px solid ${props.color}`,
                            top: `0%`,
                            left: `101%`,
                            width: `3%`,
                            height: `100%`,
                        }}
                    >

                    </div>
                </div>
            ))}
        </div>
    )
}

export default memo(MinuteScale, () => true)