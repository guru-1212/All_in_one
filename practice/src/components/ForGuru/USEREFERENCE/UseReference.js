

import React, { useRef,useState } from "react";
import ChildForRef from "./Child_for_useReference/ChildRed";


const ReferenceHook = () =>{
    const [input_val , setInputVal] = useState("");
    const inputReference = useRef();
    function handleChange(){
        setInputVal(inputReference.current.value)
    }

    return(
        <div className="container">
            <dt>useRef</dt>
            <dd>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.</dd>
            <dt>Syntax</dt>
            <dd>const refContainer = useRef(initialValue);</dd>
            <dt>Example</dt>
            <dd><textarea onChange={handleChange} placeholder="Enter name" ref={inputReference}/></dd>
            <div className="d-flex">
                <dd className="text-warning me-4">Output data from parent  - {input_val}</dd>
                <ChildForRef inputvalue={input_val}></ChildForRef>
            </div>
        </div>
    )
}

export default ReferenceHook;