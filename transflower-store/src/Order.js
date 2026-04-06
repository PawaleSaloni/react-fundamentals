import React from "react";


class Order extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.customerName}</h3>
        <hr />
        <p>ID: {this.props.id}</p>
        <p>Order Date: {this.props.orderDate}</p>
        <p>Amount: {this.props.amount}</p>
        <p>Status: {this.props.status}</p>
        
        <button>Add to Cart</button>
      </div>
         
    );
  }
}

export default Order;
