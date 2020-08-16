import React, { Component } from 'react';
import Table from './../../component/table/Table';
import Product from './../../component/product/Product';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        });
    }
    onDelete = (id) => {
        var { products } = this.state;
        callApi(`products/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                var index = this.findIndex(products, id);
                if(index !== -1){
                    products.splice(index, 1);
                    this.setState({
                        products: products
                    })
                }
            }
        });
    }
    findIndex = (products, id) => {
        var result = -1;
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    }
    render() {
        var { products } = this.state;

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

export default ProductList;