import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const onFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(onFetchApi(res.data));//phai co du lieu thi moi dispatch action duoc
        });
    }
}
export const onFetchApi = (products) => {
    return{
        type: Types.FETCH_API,
        products
    }
}


export const onDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(onDeleteProduct(id));
        })
    }
}

export const onDeleteProduct = (id) => {
    return{
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const onAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(onAddProduct(res.data));
        })
    }
}

export const onAddProduct = (product) => {
    return{
        type: Types.ADD_PRODUCT,
        product
    }
}

export const onEditProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(onEditProduct(res.data));
        })
    }
}

export const onEditProduct = (product) => {
    return{
        type: Types.EDIT_PRODUCT,
        product
    }
}


export const onUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(onUpdateProduct(res.data));
        })
    }
}

export const onUpdateProduct = (product) => {
    return{
        type: Types.UPDATE_PRODUCT,
        product
    }
}

