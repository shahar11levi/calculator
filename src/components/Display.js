import { useState, createContext, useContext } from "react";
import {CalculatorContext,CalculatorProvider} from "../context/Calculator.js";
import { Textfit } from 'react-textfit';


const Display = ()=>{
    const {info} = useContext(CalculatorContext);

    return(
        <div className="display">
            <Textfit mode="single">
                {info.a ==0 && info.op != "" && info.flag ==0 ? info.b : info.a}
            </Textfit>          
        </div>
    )
}
export default Display