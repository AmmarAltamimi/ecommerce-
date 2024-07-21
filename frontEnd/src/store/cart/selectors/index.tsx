import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";


 const getTotalPrice = createSelector ( 
    (state : RootState) => state.cart,
    (cart) =>{

        const recordsWithQuantity = cart.records.map((record) =>{ // i need each product with  quantity and its price

            return {...record,quantity:cart.items[record.id] }  
          });

          const totalPrice = recordsWithQuantity.reduce((accumulator, record) => {
            const price = record.price;
            const quantity = record.quantity || 0;
          
              return accumulator + +price * quantity;
          }, 0);
        
      return totalPrice;
    });


    
 const getTotalQuantity = createSelector (
    (state : RootState) => state.cart.items,
    (items) =>{

            const totalQuantity = Object.values(items).reduce((accumulator, ele) => {
                  return accumulator + +ele;
              }, 0);

            
      return totalQuantity;
    });
       
       

export {getTotalPrice,getTotalQuantity};