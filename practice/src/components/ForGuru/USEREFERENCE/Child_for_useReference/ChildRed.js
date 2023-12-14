import React from "react";
import SecondChildForRef from "../SecondChildForRef";
const ChildForRef = (props) =>{
    // const {inputvalue} = props
    return(
        <>
        
            <p className="text-danger me-4">Output data got from child {props.inputvalue}</p>
            <SecondChildForRef secondPorps={props.inputvalue} ></SecondChildForRef>
        </>
    )
}
export default ChildForRef;