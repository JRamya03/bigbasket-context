import Products from "./Products.json"
export const initialState = {
    name:"BIG-BASKET",
    arr: Products.veg
    
}

export const reducer = (state,action)=>{
    if(action.type==="fav"){
        return {...state,arr:action.payload}
       }
       else if(action.type==="cart"){
        return{...state,arr:action.payload}
       }
       else if(action.type==="sub"){
        return{...state,arr:action.payload}
       }
       else if (action.type==="add"){
        return{...state,arr:action.payload}
       }
}

