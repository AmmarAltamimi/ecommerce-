import { createSlice } from "@reduxjs/toolkit";
import actAddOrder from "./act/actAddOrder";
import actGetOrder from "./act/actGetOrder";
import { TLoading } from "@types";
import { TOrderProduct } from "@types";
import { isString } from "@types";

type TStateOrder = {
records:TOrderProduct[]
error: null | string ,
loading:TLoading

}


const initialState:TStateOrder = {
    records:[],
    error: null,
    loading:"idle"
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {


        cleanUpLoading : (state)=>{
            state.loading= "idle"
            state.error= null
        },

        cleanUpOrder : (state)=>{
            state.records=[];
        }
      
    },
    extraReducers : (builder)=>{

        builder.addCase(actAddOrder.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actAddOrder.fulfilled, (state)=>{
            state.loading="succeeded";
            

        });

        builder.addCase(actAddOrder.rejected, (state,action)=>{
            state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
        });





        builder.addCase(actGetOrder.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actGetOrder.fulfilled, (state,action)=>{
            state.loading="succeeded";
            state.records = action.payload

        });

        builder.addCase(actGetOrder.rejected, (state,action)=>{
            state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
        });
        
    }

})


export  {actAddOrder,actGetOrder};
export const {cleanUpLoading,cleanUpOrder} = orderSlice.actions
export default orderSlice.reducer;