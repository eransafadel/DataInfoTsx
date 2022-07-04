import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {Data} from "../../Utility/macros"


interface dataState {
    value:Data[]
}
const initialState:dataState = {
    value:[],
}

export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        addItem: (state,action:PayloadAction<Data> )=>{
            state.value.push(action.payload);
        }
    }
});

export const {addItem} = dataSlice.actions;

export default dataSlice.reducer;