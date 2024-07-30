import { configureStore } from "@reduxjs/toolkit";
import usersDataReducer from "./dataSlice";

const appStore = configureStore({
    reducer:{
        users:usersDataReducer
    }
})

export default appStore;