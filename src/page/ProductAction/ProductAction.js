import React, { Component } from 'react';
import * as Actions from './../../actions/index';
import { connect } from 'react-redux';

class ProductAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            txtName: '',
            txtCode: '',
            txtPrice: '',
            cbkStatus: false
        }
    }
    componentDidMount() {
        var {match} = this.props;
        if(match.params.id){
            this.props.onEditProductRequest(match.params.id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.productEditing){
            var {productEditing} = nextProps;
            this.setState({
                id: productEditing.id,
                txtName: productEditing.name,
                txtCode: productEditing.code,
                txtPrice: productEditing.price,
                cbkStatus: productEditing.status
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
        var product = {
            id: this.state.id,
            name: this.state.txtName,
            code: this.state.txtCode,
            price: this.state.txtPrice,
            status: this.state.cbkStatus
        }
        if (id) {
            this.props.onUpdateProductRequest(product);
        } else {
            this.props.onAddProductRequest(product);
        }
        this.props.history.goBack();
    }
    render() {
        var { txtName, txtPrice, cbkStatus, txtCode } = this.state;
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
                        <label>Mã sản phẩm: </label>
                        <input
                            type="text"
                            className='form-control'
                            name='txtCode'
                            value={txtCode}
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


const mapStateToProps = state => {
    return {
        productEditing: state.productEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductRequest: (product) => {
            dispatch(Actions.onAddProductRequest(product));
        },
        onEditProductRequest: (id) => {
            dispatch(Actions.onEditProductRequest(id));
        },
        onUpdateProductRequest: (product) => {
            dispatch(Actions.onUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAction);