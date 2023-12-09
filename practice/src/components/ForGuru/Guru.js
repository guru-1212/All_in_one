import React, { useEffect, useState } from "react";
const Guru = () => {
    const [Data, setData] = useState([]);
  
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.products);
            });
    }, []);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>PHOTO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((productDetail)=>{
                            return(
                                <tr>
                                <td>{productDetail.id}</td>
                                <td>{productDetail.title}</td>
                                <td>{productDetail.description}</td>
                                <td>{productDetail.price}</td>
                                <td><img className="img_width" src={productDetail.thumbnail}></img></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Guru;