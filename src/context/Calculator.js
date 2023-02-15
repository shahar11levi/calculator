import { createContext, useState } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = ({children})=>{
    const [info, setInfo] = useState({
        a:0,
        b:0,
        op:"",
        flag:0
    });

    const val = {info,setInfo};

    return(
        <CalculatorContext.Provider value={val}>
            {children}
        </CalculatorContext.Provider>
    )
}
export default CalculatorProvider;

