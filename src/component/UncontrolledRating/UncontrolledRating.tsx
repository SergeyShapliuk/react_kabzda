
import React, {useState} from "react";
import Star2 from "../Star2";

type RatingPropsType = {
    value:0| 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    const [selected,setSelected]=useState(0)


    return (<div>
            <Star2 selected={selected>0} setSelected={()=>setSelected(1)} />
            <Star2 selected={selected>1} setSelected={()=>setSelected(2)} />
            <Star2 selected={selected>2} setSelected={()=>setSelected(3)} />
            <Star2 selected={selected>3} setSelected={()=>setSelected(4)} />
            <Star2 selected={selected>4} setSelected={()=>setSelected(5)} />
        </div>
    )
}

export default UncontrolledRating;




