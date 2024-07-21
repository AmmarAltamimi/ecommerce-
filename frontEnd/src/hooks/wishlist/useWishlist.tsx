import { useEffect } from "react"
import { useAppDispatch } from "@store/hook"
import { useAppSelector } from "@store/hook"
import {actGetWishList, cleanUpWishlist} from "@store/wishlist/wishlistSlice"

function useWishlist() {
 const {records,error,loading } = useAppSelector((state)=>state.wishlist)
const dispatch = useAppDispatch()
const itemid = useAppSelector((state)=> state.wishlist.itemsId)
const { items } = useAppSelector((state)=>state.cart)



const recordsWithIsLike = records.map((record) =>{

  return {...record,quantity:items[record.id],isLiked:itemid.includes(record.id) }  
})



useEffect(()=>{

    const promise = dispatch(actGetWishList("ProductsFullInfo"));


    return ()=>{
      dispatch(cleanUpWishlist())
      promise.abort()
    }
     
} ,[dispatch ])


return {recordsWithIsLike,error,loading}

}

export default useWishlist
