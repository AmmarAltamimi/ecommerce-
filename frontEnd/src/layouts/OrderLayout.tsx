import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

function OrderLayout() {
  return (
    <div className="flex flex-col  sm:flex-row   items-center">
      <ul className=" menu bg-base-200 rounded-lg shadow-lg w-56 m-auto mt-4 sm:ml-2 sm:mr-2 self-start">
        <li className="mb-3">
          <NavLink to="" end className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <MdOutlineAccountCircle className="text-2xl" />
            <p className="ml-2 text-lg font-medium">Account Info</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="orderInfo" className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <AiOutlineProduct className="text-2xl" />
            <p className="ml-2 text-lg font-medium">Orders</p>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default OrderLayout;
