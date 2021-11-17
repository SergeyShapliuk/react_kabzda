import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./component/Rating/Rating";
import {UncontrolledAccordion} from "./component/UncontroledAcccordion/UncontrolledAccordion";

function App() {
    let[ratingValue,setRatingValue]=useState<RatingValueType>(0)
  return (
    <div className="App">
        <UncontrolledAccordion title={"Menu"}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
    </div>
  );
}

export default App;
