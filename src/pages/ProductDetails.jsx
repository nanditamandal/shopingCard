import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";


export default function ProductDetails() {
  const {id} =useParams();
  const {handelCard} =useContext(MyContext);
  
// const data =useContext(MyContext);
//   console.log(data.value);
//   console.log(data.name);
//  const element=data.value;
//  console.log(element);
  


    const [productDetails, setProductDetails]= useState({});
    // console.log(productDetails);
    const {title, description, images, thumbnail}=productDetails;

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res=> setProductDetails(res));

    },[id])


        // console.log(productDetails.images)
        
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <Link to="/"><div className=""><button className="btn btn-primary">home</button></div></Link>
            <div className=""><button className="btn btn-primary" onClick={()=>handelCard(productDetails)}>Add to card</button></div>
            </div>
        </div>
        </div>
    
  )
}
