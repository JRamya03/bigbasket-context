import React, { useContext } from "react";
import { bigB } from "../Context/Context";

export const Service = ()=>{
    const {state,dispatch} = useContext(bigB)
      return( 
        <div>
            <h1> service</h1>
        </div>
      )
}