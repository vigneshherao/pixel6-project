import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:"datas",
    initialState:{
        users:[],
        usersData:[]
    },
    reducers:{
        addUsersData:(state,action)=>{
            state.users = action.payload;
            state.usersData = action.payload;
        },
        
    }
})

export const {addUsersData} = dataSlice.actions;

export default dataSlice.reducer;