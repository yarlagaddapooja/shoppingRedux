import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
    currentItem: null,
    cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }

};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return state;
    }
};

export const addToCart = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const item = state.products.find((product) => product.id == action.payload.id)
            const inCart = state.cart.find((product) => product.id == action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ?
                    state.cart.map((product) => product.id == action.payload.id ? { ...product, qty: product.qty + 1 } : product) :
                    [...state.cart, { ...item, qty: 1 }]
            }
    }
}