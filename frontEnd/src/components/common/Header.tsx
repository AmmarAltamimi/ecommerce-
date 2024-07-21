import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@store/hook"
import ShoppingAndWishlist from "./ShoppingAndWishlist"
import { FaArrowDown } from "react-icons/fa";
import { authLogOut } from "@store/auth/authSlice";
import { useEffect } from "react";
import { actGetWishList } from "@store/wishlist/wishlistSlice";

function Header() {

    const {user,accessToken} = useAppSelector(state=>state.auth);
    const dispatch = useAppDispatch()
  


    function handlerClick(){
      dispatch(authLogOut())
    }

  useEffect(()=>{
  if(accessToken){
    dispatch(actGetWishList("prodctId"));
    }
  },[dispatch,accessToken])

 

  return (
    <>
          <div>
        <div className="navbar bg-base-300 rounded-lg">
          <div className="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 10a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM13 6a1 1 0 100-2 1 1 0 000 2zm-6 8a1 1 0 100-2 1 1 0 000 2zm8-3a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd"
            />
          </svg>
            <Link to="/" className=" text-gray-600 text-xl font-medium cursor-pointer hover:text-black">eCommerce System</Link>
          </div>

          <ul className="hidden md:flex menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Categories">Category</Link>
              </li>
              <li>
                <a href="https://bejewelled-cobbler-9c532e.netlify.app/" target="_blank" >About me</a>
              </li>
            </ul>
            
          <ShoppingAndWishlist isShoppingCard={true}/>
          <ShoppingAndWishlist isShoppingCard={false}/>

          <div className="navbar-center  lg:flex">
          <div className="dropdown md:hidden">
             { accessToken ?  ( <div tabIndex={0} role="button" className="btn m-1">Welcom {user?.firstName} <FaArrowDown className="mt-1"/> </div>)
             :
             (<div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>) 
             }
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Categories">Category</Link>
                </li>
                <li>
                  <a href="https://bejewelled-cobbler-9c532e.netlify.app/" target="_blank" >About me</a>
                </li>
              { accessToken ?
               (
               <>
               <li><a>profile</a></li>
              <li> <Link to="/order">orders</Link></li>
              <hr />
              <li><Link to="/" onClick={handlerClick}>log out</Link></li> </>)
              :
              ( <>
                <li>
                  <Link to="/register">Register</Link>
              </li>
              <li>
                  <Link to="/signIn">Sign In</Link>
             </li></>)}
              </ul>
            </div>
          </div>

  
   

          <div className="hidden md:flex">
          {accessToken ?
          (
            <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Welcom {user?.firstName} <FaArrowDown className="mt-1"/> </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>profile</a></li>
              <li><Link to="/order">orders</Link></li>
              <hr />
              <li><Link to="/" onClick={handlerClick}>log out</Link></li>
            </ul>
          </div>
          
           
          ) 
        
          :  
          (
            <>
            <div className="ml-3">
            <Link to="/register" className="btn">Register</Link>
          </div>
          <div className="ml-3">
            <Link to="/signIn" className="btn">Sign In</Link>
          </div>
          </>
          )}
        </div>

        </div>
      </div>
    </>
  )
}

export default Header
