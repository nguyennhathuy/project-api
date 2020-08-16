import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';

class ProductAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPrice: '',
            cbkStatus: false
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match.params.id) {
            callApi(`products/${match.params.id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    txtName: data.name,
                    txtPrice: data.price,
                    cbkStatus: data.status
                })
            })
        }
    }
    goBack = () => {
        this.props.history.goBack();
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        var { match } = this.props;
        var id = match.params.id;
        if(id) {
            callApi(`products/${id}`, 'PUT', {
                name: this.state.txtName,
                price: this.state.txtPrice,
                status: this.state.cbkStatus
            }).then(res => {
                this.props.history.goBack();
            });
        } else {
            callApi('products', 'POST', {
                name: this.state.txtName,
                price: this.state.txtPrice,
                status: this.state.cbkStatus
            }).then(res => {
                this.props.history.goBack();
            })
        }
        
    }
    render() {
        var { txtName, txtPrice, cbkStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <legend>
                        {this.props.match.params.id ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}
                    </legend>
                    <div className="form-group">
                        <label>Tên sản phẩm: </label>
                        <input
                            type="text"
                            className='form-control'
                            name='txtName'
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input
                            type="number"
                            className='form-control'
                            name='txtPrice'
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái: </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type='checkbox'
                                name='cbkStatus'
                                value={cbkStatus}
                                onChange={this.onChange}
                                checked={cbkStatus}
                            />
                                Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success">Save</button>&nbsp;
                    <button type="button" className="btn btn-warning" onClick={this.goBack}>Back</button>
                </form>
            </div>
        );
    }
}

export default ProductAction;