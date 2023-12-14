import React, { useCallback, useRef, useState } from 'react'

const SecondChildForRef = React.memo((props) => {
    const [updateVal, setUpdateVal] = useState("from second comp");
    const textareaRefVal = useRef();
    // ----- I am using here useCallback bcz the funciton loading when i am chanign vallue in parent comp. Here use callback what it will do is when the values changing in parent then also this function will not recall only the child component will re-render not a all things. We can prevent the re-rendering of child component also but when ever the data changing in child component then the re-rendaring is common in react. if the data is not changin , means there is no changes in child component then we can prevent the child component form re-rendering. using React.memo()---------------->
    const  changedValue = useCallback(()=> {   
        setUpdateVal(textareaRefVal.current.value)
    })
    // console.log(updateVal);
   
    return (
        <>
            <div className='text-success'>SecondChildForRef  {props.secondPorps} </div>
            
            <textarea onChange={changedValue} ref={textareaRefVal}></textarea>
        </>

    )
})

export default SecondChildForRef