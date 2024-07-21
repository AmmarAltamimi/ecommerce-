import Card from "@components/eCommerce/Card"
import Loading from "@components/feedback/Loading"
import GridList from "@components/common/GridList"
import {IProduct} from "@types"
import CartSubtotalPrice from "@components/eCommerce/CartSubtotalPrice"
import {useCards} from "@hooks"
function Cards () {
const {recordsWithQuantity,error,loading,removeItem,changeQuantityHandler,totalPrice} = useCards();

  return (
    <>
      <Loading loading={loading} error={error} type="card">
        <GridList<IProduct> records= {recordsWithQuantity}  pageName="Shopping Cart"  renderItem ={(recordsWithQuantity)=> <Card {...recordsWithQuantity} removeItem ={removeItem} changeQuantityHandler={changeQuantityHandler}/>}/>
         {recordsWithQuantity.length > 0 ? <CartSubtotalPrice totalPrice={totalPrice} /> : ""} 
        </Loading>
    
    </>
  )
}

export default Cards
