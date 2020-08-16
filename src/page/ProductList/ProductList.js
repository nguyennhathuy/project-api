import React, { Component } from 'react';
import Table from './../../component/table/Table';
import Product from './../../component/product/Product';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from './../../actions/index';

class ProductList extends Component {
    componentDidMount() {
        this.props.onFetchProductsRequest();
    }
    onDelete = (id) => {
        this.props.onDeleteProductRequest(id);
    }
    render() {
        var { products } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-primary mb-10">Thêm sản phẩm</Link>
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
                    <Product key={index} index={index} product={product} onDelete={this.onDelete} />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProductsRequest: () => {
            dispatch(Actions.onFetchProductsRequest());
        },
        onDeleteProductRequest: (id) => {
            dispatch(Actions.onDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);