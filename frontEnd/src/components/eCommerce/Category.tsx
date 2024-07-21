import { TCategory } from "@types";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Category({ title, prefix, img }: TCategory) {
  return (
    <div className="w-[100%] md:w-[48%]   lg:w-[23%] bg-white rounded-lg shadow-md my-2 mx-1 overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col items-center">
      <div className="relative h-60 overflow-hidden w-full">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <NavLink
            to={`/categories/products/${prefix}`}
            className="text-white text-lg font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            Explore<BsArrowRight className="text-xl" />
          </NavLink>
        </div>
      </div>
      <div className="p-4 w-full">
        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 text-center">{title}</h3>
      </div>
    </div>
  );
}

export default Category;
