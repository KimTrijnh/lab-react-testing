import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList'


const TEST_DATA = [
    {id: 134, name: 'computer', price: 1000},
    {id: 122, name: 'anker mouse', price: 50.25},
    {id: 553, name: 'computer stand', price: 20.99},
    {id: 689, name: 'mac adapter', price: 10000}
  ];

  const output = shallow(<
    ProductList products={TEST_DATA}/>)
//test total product = 4
    expect(output.find('li').length).toEqual(4);
//test 1st product contain '1000'
    const firstProduct = output.find('li').first()
    expect(firstProduct.text()).toMatch(/1000/)

//each item is rendered in the form $XXX.00 USD.
output.find('li').forEach(product => 
    expect(product.text()).toMatch(/\$\d+\.?\d?\d?\sUSD/))

//    