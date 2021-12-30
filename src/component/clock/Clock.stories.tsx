import AnalogClock from "./AnalogClock"
import DigitalClock from "./DigitalClock";


export default {
    title:'Clock',
    component:AnalogClock||DigitalClock
}


export function AnalogClockView(){
    return<>
    <AnalogClock/>

    </>

}

export function DigitalClockView(){
    return<>
<DigitalClock/>
    </>
}