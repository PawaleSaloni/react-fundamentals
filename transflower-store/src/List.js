import react from "react";
import Product from "./Product";
import data from "./data/products.json";

class List extends react.Component {
    render() {
        const products = data;
    
        return (
            <div>
                {
                // 
                products.map(item => (
                    <Product title={item.title} 
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            quantity={item.quantity}
                            likes={item.likes}/>
                ))
                }
            </div>
        );
    }
}
export default List;
