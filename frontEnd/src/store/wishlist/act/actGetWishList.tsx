import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "@types";
import axios from "axios";
import {AxiosError} from "@util/AxiosError"
import { RootState } from "@store";


const actGetWishList = createAsyncThunk("wishlist/actGetWishList" , async(dataType:string,thunkAPI)=>{

const {rejectWithValue,getState,signal} = thunkAPI;

const {auth} = getState() as RootState;



try {

    const userWishlist = await axios.get<{ productId: number }[]>(`http://localhost:5005/wishlist?userId=${auth.user?.id}`,{
        signal:signal
    });
  
    if(userWishlist.data.length==0){
        return  { data: [], dataType: "empty" }; 
    
    }

     if (dataType==="prodctId") {

        const itemId =userWishlist.data.map((item)=> item.productId);
       
        return  { data: itemId, dataType: "productsIds" }; 
    
     }
    
    else{
     const itemIdJoin =userWishlist.data.map((item)=>`id=${item.productId}`).join("&");
    const response =await axios.get<IProduct[]>(`http://localhost:5005/products?${itemIdJoin}`);
    
    return { data: response.data, dataType: "ProductsFullInfo" }; 

  }
    
} catch (error) {
    return rejectWithValue(AxiosError(error))

}

})

export default actGetWishList;