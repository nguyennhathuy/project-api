import React, { Component } from 'react';
import Table from './../../component/table/Table';
import Product from './../../component/product/Product';
import { connect } from 'react-redux';

class ProductList extends Component {
    render() {
        var {products} = this.props;
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
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product key={index} index={index} product={product} />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, null)(ProductList);