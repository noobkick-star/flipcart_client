import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        // console.log('Hiiiiii')
        const { data } = await axios.get(`https://flipcart-server.vercel.app/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async ( dispatch ) =>{
   try {
    const { data } = await axios.get(`https://flipcart-server.vercel.app/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
   } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.response });
   }
}