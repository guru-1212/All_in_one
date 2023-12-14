import React,{ useEffect , useState} from "react"
import UseContextHook from"../useContextHook/useContextHook"
const Hooks = () =>{
    const [count , setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1)
        },1000);
    });
    return(
        <div className="container">
            <div>
               <dt>What is Hooks ?</dt>
               <dd>Hooks are the functions to use some react features in functional components.</dd>
               <dt>What is useState ?</dt>
               <dd>The useState hook is used to declare state variables in a functional component and is typically used within the body of the component function.</dd>
               <dt>UseEffect with setTimeout</dt>
               <dd>{count}</dd>
               <dt>useContext Hook</dt>
               <dd>useContext is Hook is used to manage the global data in react application.</dd>
               <dt>Below data getting from </dt>
               <dd>
                <UseContextHook/>
               </dd>
            </div>
        </div>
    )
}
export default Hooks;