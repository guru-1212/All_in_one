import React, { useEffect , useState } from "react";
const Guru = () =>{
    const [data , setData] = useState(null);
    useEffect(()=>{
        const fetchdata = async () => {
            try{
                const response = await fetch("https://dummyjson.com/products");
                const reasult = response.json();
                setData(reasult)
            }
            catch{

            }
        }
        fetchdata();
    },[])
    return (
        <div>
            <h1>Guru Practice</h1>
            {
             data.map((item)=>{
               return(
                console.log(item.products)
               )
             })
            }
        </div>
      );
}
export default Guru;