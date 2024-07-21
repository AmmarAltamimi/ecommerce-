
import { lazy } from 'react';
import Errors from '@pages/Errors'


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const MainLayout = lazy( ()=>import( '@layouts/MainLayout'))
const Home = lazy( ()=>import('@pages/Home')) 
const Categories = lazy( ()=>import('@pages/Categories') ) 
const Products = lazy( ()=>import('@pages/Products') ) 
const Cards = lazy( ()=>import('@pages/Cards')) 
const WishList = lazy( ()=>import('@pages/WishList')) 
const Register = lazy( ()=>import( '@pages/Register'))
const SignIn = lazy( ()=>import('@pages/SignIn')) 
const OrderLayout = lazy( ()=>import('@layouts/OrderLayout')) 
const Orders= lazy( ()=>import('@pages/Orders')) 
const AccountInfo = lazy( ()=>import('@pages/AccountInfo')) 

import PageSuspenseFallback from '@components/feedback/PageSuspenseFallback';
import ProtectRoute from '@components/Auth/ProtectRoute';
import ProtectRouteNoAccessToken from '@components/Auth/ProtectRouteNoAccessToken';

const router = createBrowserRouter([
    { path: "/", 
      element:<PageSuspenseFallback isMainLayout={true}><MainLayout/></PageSuspenseFallback>,


      errorElement: <Errors/>  ,
      children : [
    { index: true, element: <PageSuspenseFallback> <Home/></PageSuspenseFallback>},

    

    { path: "Categories", element:   <PageSuspenseFallback><Categories/></PageSuspenseFallback> },


    { path: "Categories/Products/:prefix", element: <PageSuspenseFallback><Products/></PageSuspenseFallback>,
      loader:({params})=>{
          if( !/^[a-z]+$/i.test(params.prefix as string) && typeof params.prefix !== "string"){
            throw new Response("bad Request",{status:400 , statusText:"Category not found"})
          }
      return true;
    } },

    { path: "Cards", element:  <PageSuspenseFallback><Cards/></PageSuspenseFallback> },


    { path: "WishList", element:<ProtectRoute> <PageSuspenseFallback><WishList/></PageSuspenseFallback> </ProtectRoute>  },


    { path: "signIn", element: <ProtectRouteNoAccessToken><PageSuspenseFallback><SignIn/></PageSuspenseFallback> </ProtectRouteNoAccessToken> },


    { path: "register", element:  <ProtectRouteNoAccessToken><PageSuspenseFallback><Register/> </PageSuspenseFallback> </ProtectRouteNoAccessToken>},

    { path: "order", element:  <ProtectRoute> <PageSuspenseFallback> <OrderLayout/> </PageSuspenseFallback>  </ProtectRoute>,children : [

      { index: true, element:  <PageSuspenseFallback><AccountInfo/> </PageSuspenseFallback>},
      { path: "orderInfo", element:  <PageSuspenseFallback><Orders/> </PageSuspenseFallback>},
    ] },

  ] },



]);


function AppRoutes() {
  return ( <RouterProvider router={router} />)
}

export default AppRoutes
