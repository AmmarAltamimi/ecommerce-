import { useEffect } from "react"
import { useAppDispatch } from "@store/hook"
import { useAppSelector } from "@store/hook"
import {actGetCategory} from "@store/category/categorySlice"
import {cleanUpCategory} from "@store/category/categorySlice"
function useCategories() {
    const {records,error,loading } = useAppSelector((state)=>state.category)
    const dispatch = useAppDispatch()
    
  
useEffect(()=>{
      const promise = dispatch(actGetCategory());

    return ()=>{
      dispatch(cleanUpCategory())
      promise.abort()
    }
     
  } ,[dispatch ])

  
  return {records , error , loading }
}

export default useCategories
