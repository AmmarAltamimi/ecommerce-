import { createAsyncThunk } from "@reduxjs/toolkit";
import {IProduct} from "@types"
import axios from "axios";
import {AxiosError} from "@util/AxiosError"



const actGetProductByPrefix = createAsyncThunk("product/actGetProductByPrefix" , async(prefix:string,thunkAPI)=>{

const {rejectWithValue,signal} = thunkAPI;


try {

    const response = await axios.get<IProduct[]>(`http://localhost:5005/products?cat_prefix=${prefix}`,{
        signal:signal
    });
    return response.data
    
} catch (error) {
    return rejectWithValue(AxiosError(error))

}

})

export default actGetProductByPrefix;