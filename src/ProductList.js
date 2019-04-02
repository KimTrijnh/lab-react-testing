import React from "react";

export default class ProductList extends React.Component {
  render() {
    return (
      <ul>
      {this.props.products.map(product => <li>Price: ${product.price} USD</li>)}
      </ul>
    );
  }
}
