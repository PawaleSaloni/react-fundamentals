import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div>
        <h3>Flowers Details</h3>
        <hr />
        <p>Title: {this.props.title}</p>
        <img src={this.props.image} width="100" height="100" />
        <p>Description: {this.props.description}</p>
        <p>Quantity: {this.props.quantity}</p>
        <p>Price: {this.props.price} Rs.</p>
        <p>Likes: {this.props.likes}</p>
        <br />
        <button>Add to Cart</button>
      </div>
         
    );
  }
}

export default Product;
