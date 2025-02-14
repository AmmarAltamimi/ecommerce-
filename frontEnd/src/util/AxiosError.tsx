
import axios from "axios";

export const AxiosError = (error:unknown)=> {

    if(axios.isAxiosError(error)){
        return (error.response?.data ||error.response?.data.message || error.message);
    }
    else{
        return ("An unexpected error");
    }
}