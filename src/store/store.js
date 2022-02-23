import {configureStore} from "@reduxjs/toolkit";
import favsReducer from "./reducers/favsReducer";

export default configureStore({
    reducer: {
        favs: favsReducer
    }
});