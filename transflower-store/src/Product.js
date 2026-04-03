import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>Product Name: Gerbera</h2>
        <img src="/images/Gerbera.jpg" width="100" height="100" />        
        <p>Description: Wedding Flower</p>
        <p>Quantity: 2000</p>
        <p>Price: 10 Rs.</p>
        <p>Likes: 1000</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
