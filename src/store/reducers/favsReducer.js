import {createSlice} from "@reduxjs/toolkit";

export const favsReducer = createSlice({
    name: 'favs',
    initialState: {
        listOfFavs: []
    },
    reducers:{
        toggleFavorite: (state, action) => {
            if(!state.listOfFavs.includes(action.payload) && action.payload !== ""){
                state.listOfFavs.push(action.payload);
            }else{
                state.listOfFavs = state.listOfFavs.filter(item => item !== action.payload);
            }
        }
    }
});

export const {toggleFavorite} = favsReducer.actions;
export default favsReducer.reducer;