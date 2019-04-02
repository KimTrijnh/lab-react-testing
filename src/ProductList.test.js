import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList'
// import { jet } from 'enzyme'


const TEST_DATA = [
    {id: 134, name: 'computer', price: 1000},
    {id: 122, name: 'anker mouse', price: 50.25},
    {id: 553, name: 'computer stand', price: 20.99},
    {id: 689, name: 'mac adapter', price: 10000}
  ];

  it('has 4 products', () => {
    const output = shallow(<
        ProductList products={TEST_DATA}/>)
    //test total product = 4
        expect(output.find('li').length).toEqual(4);
  })

  it('1st product contain 1000', () => {
    const output = shallow(<
        ProductList products={TEST_DATA}/>)
        const firstProduct = output.find('li').first()
    expect(firstProduct.text()).toMatch(/1000/)
  })

  it('item is rendered in form $XXX.00 USD', () => {
    const output = shallow(<
        ProductList products={TEST_DATA}/>)

    output.find('li').forEach(product => 
        expect(product.text()).toMatch(/\$\d+\.?\d?\d?\sUSD/))
  })
    



//if price is .00, then do not show the decimals. E.g. it should be $1000 USD or $50.25 USD.
// => 2 digits after . should be different from 00

it('product has className : product-item', () => {
    const output = shallow(<
        ProductList products={TEST_DATA}/>)
    output.find('li').forEach(product => 
        expect(product.hasClass('product-item')).toEqual(true))
})

it('product has 1 button', () => {
    const output = shallow(<
        ProductList products={TEST_DATA}/>)
    const firstProduct = output.find('li').first()
    expect(firstProduct.find('button').length).toBe(1)
})

it('call 1 when btn is clicked', () =>{
    const testingFn = jest.fn()
    const output = shallow(
        <ProductList products={TEST_DATA} 
            onProductBuy={testingFn} />
    )
    const firstProduct = output.find('button').first();
    firstProduct.simulate('click');
    expect(testingFn.mock.calls.length).toEqual(1);
    expect(testingFn.mock.calls[0][0]).toEqual(134);

})

it('matches our snapshot', () => {
    const output = shallow(
        <ProductList products={TEST_DATA} />
    )
    expect(output).toMatchSnapshot();
  });
  