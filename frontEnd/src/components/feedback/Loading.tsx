import {TLoading} from "@types"
import categorySkeleton  from "@components/feedback/skeletons/CategorySkeleton"
import productSkeleton  from "@components/feedback/skeletons/ProductSkeleton"
import cardSkeleton      from "@components/feedback/skeletons/CardSkeleton"
import OrderTableSkeleton      from "@components/feedback/skeletons/OrderTableSkeleton"
import Error from "@components/common/Error"

const skeletonsTypes = {
    category:categorySkeleton,
    product:productSkeleton,
    card:cardSkeleton,
    order:OrderTableSkeleton
}



interface ILoadingErrorPage {
    loading: TLoading,
    error : null  | string ,
    children : React.ReactNode,
    type:keyof typeof skeletonsTypes
}

const Loading = ({loading , error , children,type}:ILoadingErrorPage) => {

     const Skeleton = skeletonsTypes[type]

    if(loading==="pending"){
        return <div className={`${type === "order" ? "mx-auto" : ""}`}> <Skeleton/></div>
    }
    if(loading==="failed"){
        return <Error errorNetwork={error}/>
    }

    return <div className="w-[100%]">{children}</div> ; 

}

export default Loading
