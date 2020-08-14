import React, { Component } from 'react';

class Product extends Component {
    render() {
        var { index, product } = this.props;
        var status = product.status ? 'Con hang' : 'Het hang';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${product.status ? 'success' : 'warning'}`}>{status}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success">Sửa</button>&nbsp;
                    <button type="button" className="btn btn-warning">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default Product;