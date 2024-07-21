import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@store";
import {AxiosError} from "@util/AxiosError"


const actGetOrder = createAsyncThunk("order/actGetOrder", async(_,thunkAPI)=>{

const {rejectWithValue,fulfillWithValue,getState,signal} = thunkAPI;

const {auth} = getState() as RootState;

try {


    const response = await axios.get(`http://localhost:5005/order?userId=${auth.user.id}`,{
        signal:signal
    });

    if(response.data.length === 0)  {

        return fulfillWithValue([]);
    }
    
    return response.data
    


} catch (error) {
    return rejectWithValue(AxiosError(error))
}

})

export default actGetOrder;