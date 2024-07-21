import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AxiosError} from "@util/AxiosError"

type TSignIn = {
    email    : string,
    password : string,
}

const actAuthSignIn = createAsyncThunk("authSlice/actAuthSignIn", async(data:TSignIn,thunkAPI)=>{

const {rejectWithValue} = thunkAPI;


try {

    const response = await axios.post(`http://localhost:5005/login`,data);
    return response.data
    
} catch (error) {
    return rejectWithValue(AxiosError(error))
}

})

export default actAuthSignIn;