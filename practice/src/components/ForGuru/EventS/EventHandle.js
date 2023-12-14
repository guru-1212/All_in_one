import React from "react";
import { useState } from "react";
import "./EventHandle.css";

const EventHandle = () =>{

      const [initialCount, setInitialCount] = useState(0);
    
      function ButtonClick() {
        alert("Button event working..");
      }
    
      function setTheCount(e) {
        if (e.target.id === "increase" && initialCount < 5) {
          setInitialCount(initialCount + 1);
        }
    
        if (e.target.id === "decrease" && initialCount > 0) {
          setInitialCount(initialCount - 1);
        }
      }

      // function updateValue(){

      // }
    return(
       <>
         <div className="container">
            <div className="mt-2 mb-2">
                <span>After clicking on button button event working alert</span> &nbsp; <button className="border-1" onClick={ButtonClick}>Click me </button>
            </div>
           <div className="mt-2 mb-2">
              <span>select number of items</span>  <button onClick={setTheCount} id="increase" disabled={initialCount >= 5 }>+</button> <span>{initialCount}</span> <button onClick={setTheCount} id="decrease" disabled={initialCount <= 0} > - </button> 
           </div>
        </div>
       </>
    )
}
export default EventHandle;