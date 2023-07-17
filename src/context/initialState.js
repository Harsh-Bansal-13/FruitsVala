import { fetchCart, fetchUser } from "../utils/fetchLocalStoragedata";

const userInfo =fetchUser();
const cartInfo=fetchCart();

export const intialState={
    user:userInfo,
    foodItems:null,
    cartShow:false,
    cartItems:cartInfo,
};