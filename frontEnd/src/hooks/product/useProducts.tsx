
import { useEffect } from "react"
import { useAppDispatch } from "@store/hook"
import { useAppSelector } from "@store/hook"
import {actGetProductByPrefix} from "@store/product/productSlice"
import {CleanUpProduct} from "@store/product/productSlice"
import { useParams } from "react-router-dom"

function useProducts() {
    const {records,error,loading } = useAppSelector((state)=>state.product)
const dispatch = useAppDispatch()
const {prefix} = useParams()
const { items } = useAppSelector((state)=>state.cart)
const itemid = useAppSelector((state)=> state.wishlist.itemsId)



const recordsWithQuantity = records.map((record) =>{

  return {...record,quantity:items[record.id],isLiked:itemid.includes(record.id) }  
})

useEffect(()=>{
    
     const promise =   dispatch(actGetProductByPrefix(prefix as string));
    
  return ()=>{
    dispatch(CleanUpProduct())
    promise.abort();
  }
   
  } ,[dispatch, prefix ])
  
  
  return {recordsWithQuantity,error,loading}

}

export default useProducts
