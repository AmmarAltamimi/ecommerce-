import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthSignIn from "./act/actAuthSignIn";
import { TLoading } from "@types";
import { TRegister } from "@types";
import { isString } from "@types";
type  TStateAuth = {
user : TRegister | null ;
accessToken: string | null;
error: null | string ,
loading:TLoading

}



const initialState:TStateAuth = {
    user :null,
    accessToken: null,
    error: null,
    loading:"idle"
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        resetLoadingAndError : (state)=>{
            state.loading="idle",
            state.error = "null"
        },

        authLogOut : (state)=>{
            state.user=null;
            state.accessToken=null;
        }

    },


    extraReducers : (builder)=>{

        //register
        builder.addCase(actAuthRegister.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actAuthRegister.fulfilled, (state)=>{
                state.loading="succeeded";

        });

        builder.addCase(actAuthRegister.rejected, (state,action)=>{
                state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
        });


        //signin
        builder.addCase(actAuthSignIn.pending, (state)=>{
            state.loading="pending";
            state.error = null;
        });

        builder.addCase(actAuthSignIn.fulfilled, (state,action)=>{
                state.loading="succeeded";
                state.user=action.payload.user;
                state.accessToken=action.payload.accessToken;
                

        });

        builder.addCase(actAuthSignIn.rejected, (state,action)=>{
                state.loading="failed"
                if(isString(action.payload)) 
                     state.error=action.payload;
                    
        });

    }

})


export  {actAuthRegister,actAuthSignIn};
export const {resetLoadingAndError,authLogOut } =  authSlice.actions
export default authSlice.reducer;