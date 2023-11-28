import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        viewGptPage:false,
    },
    reducers:{
        setViewGptPage:(state)=>{
           state.viewGptPage=!state.viewGptPage;
        }
    }
})

export const {setViewGptPage} = gptSlice.actions;
export default gptSlice.reducer;
