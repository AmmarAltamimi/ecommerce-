import { createSlice } from "@reduxjs/toolkit";
import actGetProductByPrefix from "./act/actGetProductByPrefix"
import { IProduct } from "@types";
import { TLoading } from "@types";
import { isString } from "@types";
type TStateProduct = {
records:IProduct[],
error: null | string ,
loading:TLoading

}



const initialState:TStateProduct = {
    records : [],
    error: null,
    loading:"idle"
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        CleanUpProduct : (state)=>{
            state.records=[];
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(actGetProductByPrefix.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actGetProductByPrefix.fulfilled, (state,action)=>{
                state.loading="succeeded";
                state.records=action.payload;

        });

        builder.addCase(actGetProductByPrefix.rejected, (state,action)=>{
                state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
        });

    }

})

export const { CleanUpProduct } = productSlice.actions
export  {actGetProductByPrefix};
export default productSlice.reducer;