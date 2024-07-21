import LottieHandler from "@components/feedback/LottieHandler"
import { useAppSelector } from "@store/hook"

type TRenderItem<T> = {
    records : T[] , 
    renderItem : (record:T) => React.ReactNode,
    pageName:string
}

const GridList =<T extends { id?: number }>({records, renderItem,pageName}:TRenderItem<T>) => {
  const successOrder = useAppSelector((state)=>state.order.loading)
  
    const renderList = records.length > 0 ? 
     records.map((record) =>(

        <> 
             {renderItem(record)}
        </>
           
    ))
    
    : successOrder === "succeeded" ? <LottieHandler type="success" message="your order has been placed successfully"/> : <LottieHandler type="empty" message={`There is no ${pageName}`} /> 

    return (
      <>
      {records.length > 0 && <h2 className=" text-3xl font-bold text-gray-800 mb-2 mt-4 ml-4">{pageName}</h2>}
      <div className={`${pageName==="Shopping Cart" || records.length==0 ? "" : "flex flex-wrap gap-2 p-6" }`}>
         
        {renderList}
      </div>
      </>
    )

}

export default GridList
