import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const  store = configureStore({
    reducer: {
        userdata : reducer,
    }
})

export default store;