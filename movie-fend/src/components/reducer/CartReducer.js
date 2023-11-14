import axios from "axios";

export const getCart = (appUserId) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:8080/cart-detail?username=${appUserId}`);
        dispatch({
          type: "GET_ALL_CART",
          payload: res,
        });
      } catch (err) {
        console.log(err);
      }
    };