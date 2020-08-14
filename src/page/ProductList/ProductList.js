import React, { Component } from 'react';
import Table from './../../component/table/Table';
import Product from './../../component/product/Product';

const products = [
    {
        code: 'IPHONE',
        name: 'Iphone XS Max',
        Price: 599,
        status: true
    },
    {
        code: 'OPPO',
        name: 'Oppo F1s',
        Price: 199,
        status: false
    },
    {
        code: 'SAMSUNG',
        name: 'Samsung Note 10 Lite',
        Price: 399,
        status: true
    }
];

class ProductList extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary mb-10">Thêm sản phẩm</button>
                <Table>
                    {this.showProduct(products)}
                </Table>
            </div>
        );
    }

    showProduct = (products) => {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <Product key={index} index={index} product={product} />
                );
            })
        }
        return result;
    }
}

export default ProductList;