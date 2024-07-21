import { useAppSelector } from "@store/hook"
import { Navigate } from "react-router-dom";


function ProtectRoute({ children }: { children: React.ReactNode  }) {
    const accessToken = useAppSelector((state)=> state.auth.accessToken);

    if(!accessToken) {
        return <Navigate to="/signin?message=login_required"/>
    }
  return (
    <>
   {children}
   </>
  )
}

export default ProtectRoute
