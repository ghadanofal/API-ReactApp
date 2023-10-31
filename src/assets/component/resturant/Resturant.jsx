import React, { useEffect, useState } from 'react'

export default function Resturant() {
    let[pizza, setPizza]= useState([])
    let[onion, setOnion]= useState([])
    let[salat, setSalat]= useState([])

    

    const getPizza= async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data = await response.json();
        let soso = await data.recipes;
        console.log(soso);
        setPizza(soso);
    }
    const getOnion= async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data = await response.json();
        let soso = await data.recipes;
        console.log(soso);
        setOnion(soso);
    }
    const getSalat= async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data = await response.json();
        let soso = await data.recipes;
        console.log(soso);
        setSalat(soso);
    }
    useEffect(()=>{
        getPizza();
        getOnion();
        getSalat();
    } , [])
    return (
    <>
    <div className="row">
        <h3 className="text-center fw-bold my-3">Pizza</h3>
            {
                pizza.map((ele)=>{
                    return(
                        <div className="col-md-2 text-center" key={ele.recipe_id}>
                            <img src={ele.image_url} className="w-50"/>
                            <p>Title : {ele.title}</p>
                            <p>Publisher : {ele.publisher}</p>
                        </div>
                    )
                })
            }
            
        </div>

<div className="row">
<h3 className="text-center fw-bold my-3">Onion</h3>
{
    onion.map((ele)=>{
        return(
            <div className="col-md-2 text-center" key={ele.recipe_id}>
                <p>Title : {ele.title}</p>
                <p>Publisher : {ele.publisher}</p>
                <img src={ele.image_url} className="w-50"/>
            </div>
        )
    })
}

</div>

<div className="row">
<h3 className="text-center fw-bold my-3">Salat</h3>
{
    salat.map((ele)=>{
        return(
            <div className="col-md-2 text-center" key={ele.recipe_id}>
                <p>Title : {ele.title}</p>
                <p>Publisher : {ele.publisher}</p>
                <img src={ele.image_url} className="w-50"/>
            </div>
        )
    })
}

</div>
</>
    )
}
