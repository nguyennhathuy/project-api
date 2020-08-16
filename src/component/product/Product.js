import React, { Component } from 'react';
import{Link} from 'react-router-dom';

class Product extends Component {
    deleteProduct = (id) => {
        if(confirm('Ban chac chan muon xoa?')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    
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
                    <Link to={`/product/${product.id}/edit`} className="btn btn-primary">Sửa</Link>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => {this.deleteProduct(product.id)}}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default Product;