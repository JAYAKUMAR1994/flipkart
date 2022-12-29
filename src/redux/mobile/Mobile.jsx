import { createSlice } from "@reduxjs/toolkit";

import one from '../../one.jpg'
import two from '../../four.jpg'
import three from "../../acertv.jpg"
import four from '../../Mitv.jpg'
import five from '../../acerlaptop.jpg'
import six from '../../lenovo.jpg'
import seven from '../../gladiator.jpg'
import eight from '../../wolverine.jpg'

const initialState = {
    mobile: [
        { id: 1, brand: "Nokia", price: 23000, img:two },
        { id: 2, brand: "Samsung", price: 20000, img:one }
    ],
    tv: [
        { id: 1, brand: "Acer", price: 23000, img:three },
        { id: 2, brand: "Mi", price: 20000, img:four }
    ],
    laptop: [
        { id: 1, brand: "Acer", price: 23000, img:five },
        { id: 2, brand: "Lenovo", price: 20000, img:six }
    ],
    cycle: [
        { id: 1, brand: "Gladiator", price: 23000, img:seven },
        { id: 2, brand: "Wolverine", price: 20000, img:eight }
    ]
}

const mobileSlice = createSlice({
    name: "mobileSlice",
    initialState,
    reducers: {
        addToMobile: (state,action)=>{
            
        }
    }
})


export default mobileSlice.reducer
export const{addToMobile}=mobileSlice.actions
