import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AxiosError} from "@util/AxiosError"
import { RootState } from "@store";


const actAddWishList = createAsyncThunk("wishlist/actAddWishList", async(productId:number,thunkAPI)=>{

const {rejectWithValue,getState} = thunkAPI;

const {auth} = getState() as RootState;

try {
    
    const isRecordExist = await axios.get(`http://localhost:5005/wishlist`,
        {
            params:{
                userId:auth.user?.id,
                productId:productId
            }

        });

    
        if(isRecordExist.data.length == 0){
           
            await axios.post(`http://localhost:5005/wishlist`, {userId:auth.user?.id, productId:productId });
            return { type: "add", productId };
           
        } else{
            
            await axios.delete(`http://localhost:5005/wishlist/${isRecordExist.data[0].id}`);
            return { type: "remove", productId };
        }   
 
} catch (error) {
        return rejectWithValue(AxiosError(error))

}

})

export default actAddWishList;