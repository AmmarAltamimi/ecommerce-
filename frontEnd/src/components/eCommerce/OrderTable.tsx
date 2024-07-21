import { TOrderProduct } from "@types";
import LottieHandler from "@components/feedback/LottieHandler"
import {  useState } from "react"
import { IProduct } from "@types";
import { MdFormatListNumbered } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia";
import { BiShow } from "react-icons/bi";
import { MdPriceChange } from "react-icons/md";


type TOrder = {
    orderFullInfo:TOrderProduct[]
}


function OrderTable({ orderFullInfo}:TOrder) {
    const [product,setProduct] = useState<IProduct[]>([]);
    
    if(orderFullInfo.length === 0 ){
        return <div className="m-auto"> <LottieHandler type="empty" message="There is no Orders" /> </div>
    }
  
function clickHandler(items:IProduct[]){
    const show = document.getElementById('my_modal_5') as HTMLDialogElement;
    show.showModal();
    setProduct((prev) => prev.concat(items));
    
    
}

  return (
    <>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
  <div className="modal-box bg-white shadow-lg rounded-lg ">
    <h3 className="font-bold text-lg text-center p-4 bg-gray-200 rounded-t-lg">Product Details </h3>
    {product.length > 0 && product.map((item, index) => ( 
      <div key={index} className="card bg-base-100 mt-4 w-full border-4">
        <figure className="h-64 overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body p-4">
          <p className="text-xl font-semibold text-gray-800 mb-2">{item.title}</p>
          <p className="text-lg text-gray-600 mb-2">Price: ${item.price}</p>
          <p className="text-lg text-gray-600 mb-2">Quantity: {item.quantity}</p>
          <p className="text-lg text-gray-600 mb-2">Total Price: ${(+item.price) * (item.quantity as number)}</p>
        </div>
      </div>
    ))}
    <form  method="dialog" className="modal-action modal-backdrop flex justify-end p-4">
      <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-md rounded-lg px-4 py-2" onClick={() =>  {const show =  document.getElementById("my_modal_5") as HTMLDialogElement; show.close()}}>Close</button>
    </form>
  </div>
</dialog>

    <div className=' mt-6 block m-auto p-2  max-w-[750px] w-[[100%] '>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Orders</h2>
      <div className="overflow-x-auto ">
        <div className="shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            {/* head */}
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-6 py-3 text-left f"> <MdFormatListNumbered className="text-xl inline-block -mt-1"/> Order Number </th>
                <th className="px-6 py-3 text-left "><LiaProductHunt className="text-xl inline-block -mt-1"/> Items </th>
                <th className="px-6 py-3 text-left"><MdPriceChange className="text-xl inline-block -mt-1"/>Total Price</th>
                <th className="px-6 py-3 text-left"><BiShow className="text-xl inline-block -mt-1"/> Product Details</th>
              </tr>
            </thead>
            <tbody>

            {orderFullInfo.map((ele)=>{

                return (
                        <tr key={ele.id} className="hover:bg-gray-100">
                            <td className="px-6 py-4">{ele.id}</td>
                             <td className="px-6 py-4">{ele.items.length}  item(s) </td>
                             <td className="px-6 py-4">${ele.subTotal} </td>
                             <td className="px-12 py-4 cursor-pointer "><button className="btn btn-outline" onClick={()=> clickHandler(ele.items)}>Show</button></td>
                        </tr>
                         )
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderTable
