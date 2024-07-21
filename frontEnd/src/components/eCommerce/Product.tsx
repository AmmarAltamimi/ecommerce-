import {IProduct} from "@types"
import { useEffect, useState } from "react"
import { addToCart } from "@store/cart/cartSlice"
import { actAddWishList } from "@store/wishlist/wishlistSlice"
import { useAppDispatch, useAppSelector } from "@store/hook"
import { FaHeart } from "react-icons/fa"


export function Product({id,title,price,img,max,quantity,isLiked}:IProduct) {

  const [disabledClick,setDisabledClick] = useState(false)
  const [islikeLoading , seIsLikeLoading] = useState(false)
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector((state)=>state.auth.accessToken)
  const[networkError,setNetworkError]= useState<string | null>(null);

  function handlerError(error:string){
    const show =document.getElementById('my_modal_1') as HTMLDialogElement
    show.showModal;
    setNetworkError(error)

  }


  const currentRemainingQuantity = +max - (quantity ?? 0)
  const reachLimit = currentRemainingQuantity === 0 ? true : false


  useEffect(()=>{

    const debounce = setTimeout(()=>{
      setDisabledClick(false)
    },1000)

    return ()=> clearTimeout(debounce)

  },[disabledClick])

  function clickHandler(){
    dispatch(addToCart(id)) 

    setDisabledClick(true)
  }

  function clickHandlerLike(){
    seIsLikeLoading(true)
    dispatch(actAddWishList(id)).unwrap().then(()=> seIsLikeLoading(false)).catch((error)=> handlerError(error)).finally(()=> seIsLikeLoading(false))
         
  }

  

  return (
      <>
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-600">Error!</h3>
    <p className="py-4 text-red-500">There is {networkError}</p> 
    <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-red-600 hover:bg-red-700 text-white" onClick={()=>setNetworkError(null)}>Close</button>
      </form>
    </div>
  </div>
</dialog>


<dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login Required!</h3>
    <p className="py-4">You need to be logged in to access this feature.</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


    <div className={`w-[100%] md:w-[48%]  lg:w-[30%]  shadow-lg bg-white rounded-lg overflow-hidden1`} >
      <div className="relative rounded-lg">
        <img
          src={img}
          alt="ui/ux review check"
          className="w-full h-52 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60 rounded-lg"></div>
        <button
          className="absolute top-4 right-4 bg-transparent text-white rounded-full p-2 "
        >

          <button>  {islikeLoading ?  <span className="loading loading-spinner bg-red-600 loading-md "></span> :<FaHeart className={`h-6 w-6  ${isLiked ? "text-red-600" : ""}`}  onClick={ !accessToken ? () => {const show = document.getElementById('my_modal_4') as HTMLDialogElement; show.showModal()}: clickHandlerLike} /> } </button>
        </button>
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between h-[50px]">
          <h3 className="text-xl font-medium text-blue-gray-900">{title}</h3>
          <div className="text-yellow-700 font-medium text-[20px]">${price} </div>
        </div>
        <p className="text-gray-700 mb-4">
        {reachLimit ? "you reach to the limit": `you can add ${currentRemainingQuantity} item(s)`}
        </p>
        <button className="btn btn-primary w-full" onClick={clickHandler} disabled={reachLimit || disabledClick}>{disabledClick ? (<div className="flex items-center justify-center gap-1"><span className="loading loading-spinner loading-md "></span> loading</div>) : "Add to cart"}</button>
      </div>
      </div>
    </>
  )
}

export default Product
