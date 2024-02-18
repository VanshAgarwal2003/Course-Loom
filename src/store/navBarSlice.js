import { createSlice } from "@reduxjs/toolkit";

const navBarSlice=createSlice({
    name: 'navbar',
    initialState: "",
    reducers: {
       changeNav:(state,action)=>{
         return action.payload; 
       },
    }
})

export default navBarSlice;

export const navBarAction=navBarSlice.actions;