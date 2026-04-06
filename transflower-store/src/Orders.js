import react from "react";
import data from "./data/orders.json";
import Order from "./Order";

class Orders extends react.Component {
    render() {
        const orders = data;

        return (
            <div>
                {
                    orders.map(item => (
                            <Order  id={item.id} 
                                    customerName={item.customerName}
                                    orderDate={item.orderDate}
                                    amount={item.amount}
                                    status={item.status}/>
                    ))
                }
            </div>
        );
    }
}
export default Orders;
           