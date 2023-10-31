import React, { useEffect, useState } from 'react'

export default function Product() {

    let[product, setProduct]= useState([])

    const getProduct = async()=>{
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data);
        setProduct(data);
    }
    useEffect(()=>{
        getProduct();
    } , [])
    return (
        
        <div className="row">
            {
                product.map((ele)=>{
                    return(
                        <div className="col-md-4 text-center" key={ele.id}>
                            <img src={ele.image} atl="image" className="w-50"/>
                            <p>price: {ele.price}</p>
                            <p>{ele.description}</p>
                        </div>
                    )
                })
            }
            
        </div>
        
    )
}
