import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://redux-http-e74df-default-rtdb.firebaseio.com/cartitems.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      console.log(cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Fetching Cart Data failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request...",
        type: "warning",
      })
    );
    const sendrequest = async () => {
      const response = await fetch(
        "https://redux-http-e74df-default-rtdb.firebaseio.com/cartitems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent Request to Database successfully",
          type: "success",
        })
      );
    };
    try {
      await sendrequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request failed",
          type: "error",
        })
      );
    }
  };
};
