import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 6 Plus</td>
                <td>500</td>
                <td>
                    <span className="label label-warning">Còn hàng</span>
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