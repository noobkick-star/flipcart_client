import axios from "axios";

import * as actionTypes from "../constants/cartConstants.js";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://flipcart-server.vercel.app/product/${id}`
    );
    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("error", error.message);
  }
};
export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
