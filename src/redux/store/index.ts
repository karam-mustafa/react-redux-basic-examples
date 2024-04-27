import { createStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers";

const store = createStore(counterReducer);


export default store;
