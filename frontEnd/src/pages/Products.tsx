
import Product from "@components/eCommerce/Product"
import Loading from "@components/feedback/Loading"
import GridList from "@components/common/GridList"
import {IProduct} from "@types"
import {useProducts} from "@hooks"

function Products() {
const{recordsWithQuantity,error,loading}= useProducts();

  return (
    <>
      <Loading loading={loading} error={error} type="product">
        <GridList<IProduct> records= {recordsWithQuantity}  pageName="Products"  renderItem ={(recordsWithQuantity)=> <Product {...recordsWithQuantity} />}/>
      </Loading>
    
    </>
  )
}

export default Products
