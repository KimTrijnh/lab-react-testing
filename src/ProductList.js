import React from "react";
// import Btn from './button'
export default class ProductList extends React.Component {
  
  render() {
    return (
      <ul>
      {this.props.products.map(product => <li className="product-item">Price: ${product.price} USD 
      <button onClick={() => this.props.onProductBuy(product.id)}>Add to cart</button></li>)}
      </ul>
    );
  }
}
