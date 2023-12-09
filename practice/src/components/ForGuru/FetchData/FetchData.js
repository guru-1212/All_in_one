import React from "react";
import { useState, useEffect } from "react";
import "./FetchData.css"
import CartItem from "./CartItmes";

const FetchData = () => {
    const [Data, setData] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.products);
            });
    }, []);
    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    function getProductDetail(productDetail) {
        var selectedData = {
              productid :  productDetail.id,
              producttitle :  productDetail.title,
              productprice :  productDetail.price,
              productbrand :  productDetail.brand,
              productImage : productDetail.thumbnail    
        };
        setCartItem((prevCartItem) => [...prevCartItem, selectedData])

    }

    return (
        <div className="container cart-main-div">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>PHOTO</th>
                        <th>Buy Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((productDetail) => {
                            return (
                                <tr>
                                    <td>{productDetail.id}</td>
                                    <td>{productDetail.title}</td>
                                    <td>{productDetail.description}</td>
                                    <td>{productDetail.price}</td>
                                    <td><img className="img_width" src={productDetail.thumbnail}></img></td>
                                    <td><button onClick={() => getProductDetail(productDetail)} className="btn btn-outline-success">Buy Now</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div style={{position:"absolute", top:"-10px",right:"10px"}}> <i class="bi bi-cart4"></i> <span className="cart-count">{cartItem.length}</span></div>
            {/* --------  Selected cart items will show down ---------- */}

            <h3>selected cart items</h3>
           <div className="d-flex flex-wrap justify-content-center">
                    {
                         cartItem.map((cartData) => {
                            return (
                                <>
                                    <div className="card w-25 me-2 ms-2 mb-2">
                                        <div className="card-header">
                                            <dt>Brand - {cartData.productbrand}</dt>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center mb-2">
                                                <img src={cartData.productImage} style={{width:"200px",height:"200px"}}></img>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <dt>ID</dt><dt className="text-right">{cartData.productid}</dt>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <dt>Price</dt><dt className="text-right">{cartData.productprice}</dt>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <dt>Title</dt><dt className="text-right">{cartData.producttitle} </dt>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
            </div>
            <CartItem cart={cartItem} />        
        </div>
    );
}
export default FetchData;