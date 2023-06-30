import { createSlice } from "@reduxjs/toolkit";

const initialState={
    darkMode:false,
}

export const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme:(state)=>{
            state.darkMode=!state.darkMode
        },

    },
})
export default themeSlice.reducer
export const {toggleTheme}=themeSlice.actions
export const selectAllTheme=(state)=>state.theme.darkMode