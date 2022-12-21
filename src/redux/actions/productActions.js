import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products")

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`)

    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data })

}


//    console.log(response)
// return{
//     type:ActionTypes.SET_PRODUCTS,
//     payload:response,
// };


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedProduct = (Product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: Product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,

    };
};

export const addToCart=()=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        
    }
}