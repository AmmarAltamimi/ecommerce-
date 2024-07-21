
import { useAppDispatch, useAppSelector } from "@store/hook";
import { actGetOrder, cleanUpLoading, cleanUpOrder } from "@store/order/orderSlice";
import { useEffect } from "react";

function useOrders() {
    const {error , loading,records} = useAppSelector((state)=>state.order);
    const dispatch = useAppDispatch();
  
  useEffect(()=>{
  
    const promise = dispatch(actGetOrder());
  
      return ()=>{
        dispatch(cleanUpOrder());
        dispatch(cleanUpLoading())
        promise.abort();
      }
  
  
  } , [dispatch])
  



  return {error , loading,records}
}

export default useOrders
