import { Suspense } from "react"
import LottieHandler from "./LottieHandler"

type TSuspense = {
    isMainLayout?:boolean
    children:React.ReactNode
}
function PageSuspenseFallback({isMainLayout,children}:TSuspense) {
  return (
    <Suspense fallback={

        <div className={`${isMainLayout?"mt-[5%]":""} mx-auto`}>
            <LottieHandler type="loading" message="loading please wait ... "/>
        </div>

    }>


         {children}
    </Suspense>
  )
}

export default PageSuspenseFallback
