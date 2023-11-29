import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        viewGptPage:false,
        gptMovies:null,
    },
    reducers:{
        setViewGptPage:(state)=>{
           state.viewGptPage=!state.viewGptPage;
        },
        addGptMovies:(state,action)=>{
            state.gptMovies=action.payload;
         }
    }
})

export const {setViewGptPage,addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;
