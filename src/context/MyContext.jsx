import { createContext, useState } from "react";


export const MyContext =createContext("hi");

export function ShareData({children}){
    const [cardList, setcardList] =useState([]);

    const [name, setName]=useState("nandita");
    const [value, setValue]=useState({});

    const handelCard =(products)=>{

        const existData = cardList.find((item)=> item.id === products.id);

        if(existData){
            const modifyData= {...existData, quantity: existData.quantity+1, totalPrice: existData.totalPrice+existData.price };
            const otherProducts= cardList.filter((item)=>item.id !== products.id);
            setcardList([...otherProducts, modifyData]);
            console.log(cardList);

        }
        else{
            setcardList([...cardList, {...products, quantity:1, totalPrice: products.price}]);
            console.log(cardList);

        }
    }

    const deleteItem=(product)=>{
        // const selectItem = cardList.find((item)=> item.id ===product.id);
        const selectItem = cardList.filter((item)=> item.id !== product.id);
        setcardList([...selectItem]);
        console.log("delete:", cardList);



    }

  
    return(<MyContext.Provider value={{name, setName, value, setValue, handelCard, cardList, deleteItem}}>
            {children}
        </MyContext.Provider>
    )
}