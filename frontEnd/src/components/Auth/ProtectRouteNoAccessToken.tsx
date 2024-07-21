import { useAppSelector } from "@store/hook"
import { Navigate } from "react-router-dom";


function ProtectRouteNoAccessToken({ children }: { children: React.ReactNode  }) {
    const accessToken = useAppSelector((state)=> state.auth.accessToken);

    if(accessToken) {
        return <Navigate to="/"/>
    }
  return (
    <>
   {children}
   </>
  )
}

export default ProtectRouteNoAccessToken
