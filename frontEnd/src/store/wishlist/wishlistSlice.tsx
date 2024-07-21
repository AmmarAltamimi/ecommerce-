import { createSlice } from "@reduxjs/toolkit";
import actGetWishList from "./act/actGetWishList";
import actAddWishList from "./act/actAddWishList";
import { TLoading } from "@types";
import { IProduct } from "@types";
import { authLogOut } from "@store/auth/authSlice";
import { isString } from "@types";

type TStateWishlist = {
itemsId:number[]
records:IProduct[],
error: null | string ,
loading:TLoading

}


const initialState:TStateWishlist = {
    itemsId:[],
    records : [],
    error: null,
    loading:"idle"
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        cleanUpWishlist:(state)=>{
            state.records=[];
        }

    },
    extraReducers : (builder)=>{
        builder.addCase(actAddWishList.pending, (state)=>{
            state.error = null;
        });

        builder.addCase(actAddWishList.fulfilled, (state,action)=>{

            if (action.payload.type === "add") {
                state.itemsId.push(action.payload.productId);
              } else {
                state.itemsId = state.itemsId.filter((el) => el !== action.payload.productId);
                state.records = state.records.filter(
                  (el) => el.id !== action.payload.productId
                );
              }

        });

        builder.addCase(actAddWishList.rejected, (state,action)=>{
                if(isString(action.payload)) 
                     state.error=action.payload;
        });



        builder.addCase(actGetWishList.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actGetWishList.fulfilled, (state,action)=>{
                state.loading="succeeded";
                if(action.payload.dataType==="empty"){
                    state.records=[];
                }
                if(action.payload.dataType==="productsIds"){
                    state.itemsId=action.payload.data as number[];
                }

                if(action.payload.dataType==="ProductsFullInfo"){
                    
                    state.records=action.payload.data as IProduct[];
                    
                }
               
            

        });

        builder.addCase(actGetWishList.rejected, (state,action)=>{
                state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
        });

          //when logout

          builder.addCase(authLogOut, (state)=>{
            state.itemsId=[];
    });
    }

})


export  {actGetWishList,actAddWishList};
export const { cleanUpWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer;