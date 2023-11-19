import {  useState } from "react";
import { useEffect } from "react"
import Products from "./Products";
// import { MyContext } from "../context/MyContext";



export default function Home() {
    const [products, setProducts]= useState([]); 

    // const data =useContext(MyContext);
    // // console.log(data.value);

    // const {cardList} = useContext(MyContext);
    // // console.log(cardList);
    useEffect(()=>{
        
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res =>setProducts(res.products));
    },[]);

  return (
    <>
     
     <div className="flex flex-wrap gap-5">

     {
        products.map((product) =>
            <Products element={product} key={product.id}></Products>
        )
     }
     </div>

    </>
   
  )
}
