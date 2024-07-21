
import empty from "@assets/lottie/empty.json"
import loading from "@assets/lottie/loading.json"
import notFound from "@assets/lottie/notFound.json"
import error from "@assets/lottie/error.json"
import Lottie from "lottie-react"
import success from "@assets/lottie/success.json"
import serverError from "@assets/lottie/serverError.json"

const lottieHandlerProp = {
empty,
loading,
notFound,
error,
serverError,
success,
}

type TLottieState = {
    type:keyof typeof lottieHandlerProp
    message?:string,
    className?:string,
}

function LottieHandler({type,message}:TLottieState) {
    const lottie = lottieHandlerProp[type];
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={lottie} className="w-[400px] mb-4 "  />
      {message && <h3>{message}</h3>}
    </div>
  )
}

export default LottieHandler
