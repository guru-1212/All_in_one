import React ,{useState} from "react";
import DatePicker from "react-multi-date-picker"
import { Calendar , DateObject} from "react-multi-date-picker"
import transition from "react-element-popper/animations/transition"

const TODO = () => {
   
       
    return (
        <>
            <div className="container">TODO PAGE</div>
            <DatePicker />
            <DatePicker  animations={[transition({ duration: 800, from: 35 })
      ]} 
    />
                         
        </>
    )
}
export default TODO;