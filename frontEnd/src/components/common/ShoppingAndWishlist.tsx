
import {  NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAppSelector } from "@store/hook"
import { BsPostcardHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { getTotalQuantity } from "@store/cart/cartSlice"


type ICardAndWishList = {
  isShoppingCard:boolean,
}

function ShoppingAndWishlist({isShoppingCard}:ICardAndWishList) {
    const navigate = useNavigate()
    const totalQuantity =  useAppSelector(getTotalQuantity);
    const itemsid = useAppSelector(state=>state.wishlist.itemsId);

    const Quantity = isShoppingCard ? totalQuantity : itemsid.length;

    const [isAnimate,setisAnimate] = useState(false)

    useEffect(()=>{
        if(Quantity === 0){
  
          return
        }
  
        setisAnimate(true)
        const debounce = setTimeout(()=>{
          setisAnimate(false)
  
        },1000)
  
        return ()=>{
          clearTimeout(debounce)
        }
  
      },[Quantity])


function handlerClick(){
    if(!isShoppingCard){
        navigate("/wishlist")
    }
}

  return (
    <>
              <div className="dropdown dropdown-end" onClick={handlerClick} >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle flex justify-center items-center"
            >
                
                {isShoppingCard ?  <NavLink to="/Cards"> <HiOutlineShoppingCart  className="text-[24px]" /></NavLink> : <NavLink to="/WishList"> <BsPostcardHeart className="text-[24px] mt-[7px]"/></NavLink>   }
                 
              
              </div>
              { Quantity >0 && <span className={` absolute -top-1 right-0 bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center ${isAnimate ? "animate-pumping" : ""} `}>{Quantity}</span>}
            </div>

    </>
  )
}

export default ShoppingAndWishlist
