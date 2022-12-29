import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    islogin: false,
    name:""
}

const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        updateHome: (state, action) => {
           
            state.islogin = action.payload.b
            state.name=action.payload.a
           
        }
    }
})

export default homeSlice.reducer
export const{updateHome}=homeSlice.actions