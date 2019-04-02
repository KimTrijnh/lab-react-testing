import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import ProductList from './ProductList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the name of my site', () => {
  const output = shallow(<App/>);
  const header = output.find('h1').first();
  expect(header.contains('My E-Commerce Site')).toBe(true);
});

it('contains a product list', () => {
  const output = shallow(<App/>);
  expect(output.find(ProductList).length).toBe(1)
})