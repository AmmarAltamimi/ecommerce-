
import Product from "@components/eCommerce/Product"
import Loading from "@components/feedback/Loading"
import GridList from "@components/common/GridList"
import {IProduct} from "@types"
import {useWishlist} from "@hooks"

function WishList() {
const {recordsWithIsLike,error,loading} =  useWishlist();

  return (
    <>
      <Loading loading={loading} error={error} type="product">
        <GridList<IProduct> records= {recordsWithIsLike}  pageName="Wishlist" renderItem ={(recordsWithIsLike)=> <Product {...recordsWithIsLike} />}/>
      </Loading>
    
    </>
  )
}

export default WishList
