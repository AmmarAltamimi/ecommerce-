import Category from "@components/eCommerce/Category"
import Loading from "@components/feedback/Loading"
import GridList from "@components/common/GridList"
import {TCategory} from "@types"
import {useCategories} from "@hooks"

function Categories() {
const {records,error,loading}= useCategories();

  return (
    <>
      <Loading loading={loading} error={error} type="category">
        <GridList<TCategory> records= {records}  pageName="Categories" renderItem ={(record)=> <Category {...record}/>}/>
      </Loading>
    
    </>
  )
}

export default Categories
