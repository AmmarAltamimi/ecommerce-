import { createAsyncThunk } from "@reduxjs/toolkit";
import {TCategory} from "@types"
import axios from "axios";
import {AxiosError} from "@util/AxiosError"



const actGetCategory = createAsyncThunk("category/actGetCategory" , async(_,thunkAPI)=>{

const {rejectWithValue,signal} = thunkAPI;


try {

    const response = await axios.get<TCategory[]>("http://localhost:5005/category",{
        signal:signal
    });
    return response.data
    
} catch (error) {
    return rejectWithValue(AxiosError(error))

}

})

export default actGetCategory;