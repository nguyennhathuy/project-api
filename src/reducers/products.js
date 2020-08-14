var initialState = [
    {
        code: 'IPHONE',
        name: 'Iphone XS Max',
        price: 599,
        status: true
    },
    {
        code: 'OPPO',
        name: 'Oppo F1s',
        price: 199,
        status: false
    },
    {
        code: 'SAMSUNG',
        name: 'Samsung Note 10 Lite',
        price: 399,
        status: false
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default:
            return [...state];
    }
}

export default products;