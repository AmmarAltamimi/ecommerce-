import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AxiosError} from "@util/AxiosError"
import { RootState } from "@store";


const actAddOrder = createAsyncThunk("order/actAddOrder" , async(subtotal:number,thunkAPI)=>{

const {rejectWithValue,getState} = thunkAPI;

const {cart,auth} = getState() as RootState;

const orderItems = cart.records.map((ele)=>{
    return {
        id:ele.id,
        title:ele.title,
        price:ele.price,
        img:ele.img,
        quantity:cart.items[ele.id],     
    }
})

try {

                  const response =  await axios.post(`http://localhost:5005/order`, {
                            userId:auth.user?.id,
                             items:orderItems,
                             subTotal:subtotal
                           })

                       
            
    return response.data
    
} catch (error) {
    return rejectWithValue(AxiosError(error))

}

})

export default actAddOrder;