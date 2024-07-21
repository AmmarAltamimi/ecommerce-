import { IProduct } from "@types";
import { MdOutlineDelete } from "react-icons/md";
import { memo } from "react";

const Card = memo(({ id, title, price, img, max, quantity, removeItem, changeQuantityHandler }: IProduct) => {


  function clickHandler() {
    removeItem(id);
  }


  const selectArray:number[] = Array(+max).fill(0) ;

  const selectOptions = selectArray.map((_, index) => (
    <option key={index} value={index + 1}>
      {index + 1}
    </option>
  ));

  function changeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const currentQuantity = +e.target.value;
    changeQuantityHandler(id, currentQuantity);
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row justify-between items-center p-5 border-b border-gray-200 ">
    <div className="flex max-w-md bg-white rounded-lg overflow-hidden shadow-lg w-[500px]">
      <div className="w-[150px] bg-cover" style={{ backgroundImage: `url(${img})`, height: '200px' }}></div>

      <div className="w-2/3 p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-16">{title}</h1>
        <div className="flex justify-between items-center mt-3">
          <h1 className="text-lg font-bold text-gray-700">${price}</h1>
          <button
            onClick={clickHandler}
            className="flex item-center px-3 py-1 text-sm font-semibold text-white uppercase bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            <MdOutlineDelete className="text-xl" />
            <p>Remove</p>
          </button>
        </div>
      </div>
    </div>


      <label className="form-control w-48 ml-5">
        <div className="label">
          <span className="label-text">Quantity</span>
        </div>
        <select className="select select-bordered" value={quantity} onChange={changeHandler}>
          {selectOptions}
        </select>
      </label>
    </div>
  );
})

export default Card;
