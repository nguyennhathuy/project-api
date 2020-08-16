import * as Types from './../constants/ActionTypes';

var initialState = [];
var findIndex = (products, id) => {
    var result = -1;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            result = i;
            break;
        }
    }
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    switch(action.type){
        case Types.FETCH_API:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            if(index !== -1) {
                state[index] = action.product; 
            }
            return [...state];
        default:
            return [...state];
    }
}

export default products;