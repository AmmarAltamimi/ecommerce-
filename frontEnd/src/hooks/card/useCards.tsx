import { getTotalPrice } from "@store/cart/cartSlice"
import {updateQuantity} from "@store/cart/cartSlice"
import { useEffect,useCallback } from "react"
import { useAppDispatch } from "@store/hook"
import { useAppSelector } from "@store/hook"
import { actGetCartById } from "@store/cart/cartSlice"
import {removeItemById} from "@store/cart/cartSlice"
import {cleanUpCart} from "@store/cart/cartSlice"
import { cleanUpLoading } from "@store/order/orderSlice"

function useCards() {
    const {items,records,error,loading } = useAppSelector((state)=>state.cart)
    const dispatch = useAppDispatch()
    const totalPrice =  useAppSelector(getTotalPrice)
    
    
    const recordsWithQuantity = records.map((record) =>{
    
      return {...record,quantity:items[record.id] }  
    })
    
    useEffect(()=>{
    
        const promise = dispatch(actGetCartById());  

        return ()=>{
          dispatch(cleanUpCart())
          promise.abort()
          dispatch(cleanUpLoading())
        }
         
    } ,[dispatch ])
    

    const removeItem = useCallback((id:number)=>{
      dispatch(removeItemById(id))
    },[dispatch])
      
      const changeQuantityHandler = useCallback((id:number , quantity:number)=>{
        dispatch(updateQuantity({id,quantity})) 
      },[dispatch])


      return {recordsWithQuantity,error,loading,removeItem,changeQuantityHandler,totalPrice}
}

export default useCards
