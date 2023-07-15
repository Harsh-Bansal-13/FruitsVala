import { fetchUser } from "../utils/fetchLocalStoragedata";

const userInfo =fetchUser();
export const intialState={
    user:userInfo,
    foodItems:null,
};