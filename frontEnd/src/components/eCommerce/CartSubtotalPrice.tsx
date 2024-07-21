import { cleanUpCartAfterOrder } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { actAddOrder } from "@store/order/orderSlice";
import { useState } from "react";

type TPrice = {
  totalPrice: number;
};

const CartSubtotalPrice = ({ totalPrice }: TPrice) => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const { loading } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  const[networkError,setNetworkError]= useState<string | null>(null);


  function handlerError(error:string){
   const show = document.getElementById('my_modal_1') as HTMLDialogElement;
   show.showModal();
    setNetworkError(error)

  }

  function clickHandler() {
    dispatch(actAddOrder(totalPrice)).unwrap().then(() => dispatch(cleanUpCartAfterOrder())).catch((error)=> handlerError(error));
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



      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white rounded-lg shadow-lg p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-2">Confirm Order</h3>
          <p className="text-gray-700 mb-4">
            Are you sure you want to place order with Subtotal:{" "}
            <span className="font-semibold text-xl text-gray-900">{totalPrice.toFixed(2)} EGP</span>
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="btn btn-primary"
              onClick={clickHandler}
              disabled={loading === "pending"}
            >
              {loading === "pending" ? (
                <div className="flex items-center gap-1">
                  <span className="loading loading-spinner loading-md"></span> Processing
                </div>
              ) : (
                "Confirm Order"
              )}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {const show =  document.getElementById("my_modal_5") as HTMLDialogElement; show.close()}}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>



      <div className="flex flex-col sm:flex-row justify-between items-center m-6 p-4 bg-gray-100 rounded-lg shadow-lg">
        {accessToken && (
          <button
            className="btn btn-primary w-full sm:w-[150px] mb-4 sm:mb-0"
            onClick={() => {const show =  document.getElementById("my_modal_5") as HTMLDialogElement; show.showModal()}}
          >
            Place Order
          </button>
        )}
        <div className="flex justify-center items-center text-xl text-gray-900 font-medium">
          <span className="text-2xl font-bold">Subtotal:</span>{" "}
          <span className="text-3xl font-bold text-primary ml-2">${totalPrice.toFixed(2)} </span>
        </div>
      </div>
    </>
  );
};

export default CartSubtotalPrice;
