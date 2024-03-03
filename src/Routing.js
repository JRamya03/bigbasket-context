import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useReducer } from "react";
import {Home} from "./Component/Routing/Home"
import { Service } from "./Component/Routing/Service";
import { Cart } from "./Component/Routing/Cart";
import {Favourite} from "./Component/Routing/Favourite";
import { bigB } from "./Component/Context/Context";
import { initialState,reducer } from "./Component/Context/Reducer";
import { DetailsPage } from "./Component/Routing/DetailsPage";

export const  Routing = ()=>{
    const[state,dispatch] = useReducer(reducer,initialState)
   return(
    <div>
        <bigB.Provider value={{state,dispatch}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ser" element={<Service/>}/>
            <Route path="/fav" element={<Favourite/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/prodetail" element={<DetailsPage/>}/>
        </Routes>
        </BrowserRouter>
        </bigB.Provider>
    </div>
   )
}