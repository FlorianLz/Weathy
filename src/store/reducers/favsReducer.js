import {createSlice} from "@reduxjs/toolkit";
import {cookiesHelper} from "../../helpers/cookies.helper";

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
            if(cookiesHelper.getConsentValue() === "true"){
                cookiesHelper.setCookiesFavs('favoris', state.listOfFavs);
            }else{
                cookiesHelper.deleteCookie('favoris');
            }
        },
        initFavorites: (state, action) => {
            if(cookiesHelper.getConsentValue() === "true"){
                const favs = cookiesHelper.getCookiesFavs('favoris');
                return {...state, listOfFavs: favs}
            }else{
                cookiesHelper.deleteCookie('favoris');
            }

        }
    }
});

export const {toggleFavorite,initFavorites} = favsReducer.actions;
export default favsReducer.reducer;