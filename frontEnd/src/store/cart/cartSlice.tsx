import { createSlice } from "@reduxjs/toolkit";
import actGetCartById from "./act/actGetCartById";
import {IProduct} from "@types"
import { TLoading } from "@types";
import { getTotalPrice } from "@store/cart/selectors/index"
import { getTotalQuantity } from "@store/cart/selectors/index"
import { isString } from "@types";
type TStateCart = {
items : {[id:string]:number}
records:IProduct[],
error: null | string ,
loading:TLoading

}



const initialState:TStateCart = {
    items :{},
    records : [],
    error: null,
    loading:"idle"
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const id = action.payload
               if(state.items[id]){
                state.items[id]++;
               }else{
                state.items[id]=1;
               } 
        },
        removeItemById : (state,action) =>{
                 delete state.items[action.payload];
                state.records = state.records.filter((record)=>(record.id !== action.payload))
        },

        updateQuantity : (state,action) => {
            state.items[action.payload.id] = action.payload.quantity;
        },

        cleanUpCart:(state)=>{
            state.records=[];
        },
 
        cleanUpCartAfterOrder : (state)=>{
            state.records=[];
            state.items = {};
        },
    },
    extraReducers : (builder)=>{
        builder.addCase(actGetCartById.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actGetCartById.fulfilled, (state,action)=>{
                state.loading="succeeded";
                state.records=action.payload;

        });

        builder.addCase(actGetCartById.rejected, (state,action)=>{
                state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
        });

    }

})


export  {actGetCartById,getTotalPrice,getTotalQuantity };
export const {addToCart , removeItemById , updateQuantity,cleanUpCart,cleanUpCartAfterOrder  } =  cartSlice.actions
export default cartSlice.reducer;