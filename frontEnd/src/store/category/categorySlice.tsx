import { createSlice } from "@reduxjs/toolkit";
import actGetCategory from "./act/actGetCategory";
import { TCategory } from "@types";
import { TLoading } from "@types";
import { isString } from "@types";
type TStateCategory = {
records:TCategory[],
error: null | string ,
loading:TLoading

}



const initialState:TStateCategory = {
    records : [],
    error: null,
    loading:"idle"
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
            cleanUpCategory:(state)=>{
                state.records=[];
            }
    },
    extraReducers : (builder)=>{
        builder.addCase(actGetCategory.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actGetCategory.fulfilled, (state,action)=>{
                state.loading="succeeded";
                state.records=action.payload;

        });

        builder.addCase(actGetCategory.rejected, (state,action)=>{
                state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
        });

    }

})


export  {actGetCategory};
export const { cleanUpCategory } = categorySlice.actions
export default categorySlice.reducer;