import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
    items: {
        mobile: [],
        tv: [],
        laptop: [],
        cycle:[]
    }
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action)
            if (action.payload.name === "mobile") {
                let data = current(state.items.mobile).findIndex((val) => {
                    return val.id === action.payload.id
                 })           
     
                 if (data === -1) {
                     state.items.mobile=[...state.items.mobile,action.payload]
                    
                 }
                 
                 else {
                     if (action.payload.check === "plus") {
                         console.log(action)
                        state.items.mobile= state.items.mobile.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem+1 } : item
                            
                        ))    
                     }
                     else if (action.payload.check === "minus"){
                         if(action.payload.cartitem >= 1)
                        state.items.mobile= state.items.mobile.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem-1 } : item
                            
                        ))
                    }
                     
                 }
            } else if (action.payload.name === "laptop") {
                
                let data = current(state.items.laptop).findIndex((val) => {
                    return val.id === action.payload.id
                 })           
     
                 if (data === -1) {
                     state.items.laptop=[...state.items.laptop,action.payload]
                    
                 }
                 
                 else {
                     if (action.payload.check === "plus") {
                        state.items.laptop= state.items.laptop.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem+1 } : item
                            
                        ))    
                     }
                     else if (action.payload.check === "minus") {
                         if(action.payload.cartitem >= 1)
                        state.items.laptop= state.items.laptop.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem-1 } : item
                            
                        ))
                    }
                     
                 }
            }
            else if (action.payload.name === "tv") {
                let data = current(state.items.tv).findIndex((val) => {
                    return val.id === action.payload.id
                 })           
     
                 if (data === -1) {
                     state.items.tv=[...state.items.laptop,action.payload]
                    
                 }
                 
                 else {
                     if (action.payload.check === "plus") {
                        state.items.tv= state.items.tv.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem+1 } : item
                            
                        ))    
                     }
                     else if (action.payload.check === "minus") {
                         if(action.payload.cartitem >= 1)
                        state.items.tv= state.items.tv.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem-1 } : item
                            
                        ))
                    }
                     
                 }
            }
            else if (action.payload.name === "cycle") {
                let data = current(state.items.cycle).findIndex((val) => {
                    return val.id === action.payload.id
                 })           
     
                 if (data === -1) {
                     state.items.cycle=[...state.items.cycle,action.payload]
                    
                 }
                 
                 else {
                     if (action.payload.check === "plus") {
                        state.items.cycle= state.items.cycle.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem+1 } : item
                            
                        ))    
                     }
                     else if (action.payload.check === "minus") {
                         if(action.payload.cartitem >= 1)
                        state.items.cycle= state.items.cycle.map((item) => (
                            action.payload.id === item.id ? { ...item, count: action.payload.count,cartitem: action.payload.cartitem-1 } : item
                            
                        ))
                    }
                     
                 }
            }
        },

        removeToCart: (state, action) => {
                 if (action.payload.name === "mobile") {
                
                        state.items.mobile= state.items.mobile.filter((item) => (
                            action.payload.id !== item.id 
                        ))
                    }
                     
            
            else if (action.payload.name === "laptop") {
               
                        state.items.laptop= state.items.laptop.filter((item) => (
                            action.payload.id !== item.id 
                        ))
                    }
                     
           
            else if (action.payload.name === "tv") {
                
                        state.items.tv= state.items.tv.filter((item) => (
                            action.payload.id !== item.id 
                        ))
                    }
                     
            
            else if (action.payload.name === "cycle") {
                
                        state.items.cycle= state.items.cycle.filter((item) => (
                            action.payload.id !== item.id 
                        ))
                    }
                     
                 
            } 
        }
    }
)

export default cartSlice.reducer
export const{addToCart,removeToCart}=cartSlice.actions