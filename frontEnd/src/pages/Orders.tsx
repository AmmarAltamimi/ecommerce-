
import OrderTable from "@components/eCommerce/OrderTable";
import Loading from "@components/feedback/Loading";
import useOrders from "@hooks/order/useOrders";


function Orders() {
  const {error , loading,records} = useOrders()
  return (
    <Loading loading={loading} error={error} type="order">
     <OrderTable orderFullInfo={records}/>
    </Loading>
    
  );
}

export default Orders;
