import { createAsyncThunk } from "@reduxjs/toolkit";
import {IProduct} from "@types"
import axios from "axios";
import { RootState } from "@store";
import {AxiosError} from "@util/AxiosError"


const actGetCartById = createAsyncThunk("cart/actGetcartById", async(_,thunkAPI)=>{

const {rejectWithValue,fulfillWithValue,getState,signal} = thunkAPI;

const {cart} = getState() as RootState;

if(Object.values(cart.items).length === 0)   {

    return fulfillWithValue([]);
}


try {
    const itemId=Object.keys(cart.items)
    const concatenatedItemsId = itemId.map((id)=>{
        return `id=${id}`
}).join('&');
    const response = await axios.get<IProduct[]>(`http://localhost:5005/products?${concatenatedItemsId}`,{
        signal:signal
    });
    return response.data
    
} catch (error) {
    return rejectWithValue(AxiosError(error))
}

})

export default actGetCartById;