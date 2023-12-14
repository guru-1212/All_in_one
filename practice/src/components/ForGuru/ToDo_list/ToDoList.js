import React, { useState } from "react";
import "./ToDoList.css"
const ToDoList = () =>{
    const [product , setProducts] = useState([]);
    const [edit , setEditItems] = useState({})
    // useEffect(()=>{
    //     console.log(product)
    // })
    function addClick(){
        var fruitN =     document.getElementById("FName").value;
        var fruitP =     document.getElementById("FPrice").value;
        var fruitD =     document.getElementById("FDescription").value;

        if( fruitN === "" | fruitD === "" | fruitP === ""){
            alert("plz enter all data")
        }
        else{
            var allAddedData = {
                "ID" : Math.random().toString(36).substr(2, 9),
                "FN" : fruitN,
                "FP" : fruitP,
                "FD" : fruitD
            }
            setProducts((prevProduct)=>[...prevProduct , allAddedData]);
        }
          
        }
    
// ----- delete item -------->
    function deleteClick(e){
       setProducts((prevProduct)=>prevProduct.filter(items=>items.ID !== e))
    }


    // ----- Edit item ------>

    const editItem = (e) =>{
        setEditItems(e)
        console.log(edit)
    }

    return(
        <div className="container d-flex justify-content-between">
             <div>
                <div>
                    <h5>Enter Fruit Description</h5>
                    <input className="form-control mt-1 mb-1" id="FName" name="FName" required placeholder=" Name" type="text"></input>
                    <input  className="form-control mt-1 mb-1" id="FPrice" name="FName" required placeholder="Price" type="number"></input>
                    <input  className="form-control mt-1 mb-1" id="FDescription" name="FName" required placeholder=" Descriptioin" type="text"></input>
                    <button onClick={addClick} id="SubmitFruit" className="btn btn-outline-success text-center">Add your Fruit</button>
                </div>
            </div>
           <div> <ul id="addedList">  
            <h4>Added Fruits</h4>
               <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            {/* <th>ID</th> */}
                            <th>Fruit Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((addedF,index)=>{
                                return(
                                   <tr key={index}>
                                        <td>{index + 1}</td>
                                        {/* <td>{addedF.ID}</td> */}
                                        <td>{addedF.FN}</td>
                                        <td>{addedF.FP}</td>
                                        <td>{addedF.FD}</td>
                                        <td><button onClick={()=>deleteClick(addedF.ID)} id="delete_btn"><i className="bi bi-trash"></i></button></td>
                                        <td><button onClick={()=>editItem(addedF)}  id="edit_btn"><i className="bi bi-pen"></i></button></td>
                                   </tr>
                                )
                            })
                        }
                    </tbody>
               </table>
            </ul>
            </div>
           
        </div>
    )
}
export default ToDoList;