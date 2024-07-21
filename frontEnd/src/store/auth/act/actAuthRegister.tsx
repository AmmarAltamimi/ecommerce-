import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AxiosError} from "@util/AxiosError"
import { TRegister } from "@types";

const actAuthRegister = createAsyncThunk("authSlice/actAuthRegister", async(data:TRegister,thunkAPI)=>{

const {rejectWithValue} = thunkAPI;


try {

    const response = await axios.post(`http://localhost:5005/register`,data);
    return response.data
    
} catch (error) {
    return rejectWithValue(AxiosError(error))
}

})

export default actAuthRegister;