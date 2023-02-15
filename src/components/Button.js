import { useState, createContext, useContext } from "react";
import {CalculatorContext,CalculatorProvider} from "../context/Calculator.js";


const Button = ({value})=>{
    const {info,setInfo} = useContext(CalculatorContext);

    const clearHandler=()=>{
        setInfo({
            a:0,
            b:0,
            op:"",
            flag:0
        });
    }

    const dotHandler=()=>{
        setInfo({
            a: info.a.toString().includes('.')? info.a :info.a+value,
            b:info.b,
            op:info.op,
            flag:info.flag  
        });
    }

    const numberHandler= ()=>{
        const flag = value==0 && info.op!=""? 1 : 0
        setInfo({
            a:Number(info.a+""+value),
            b:info.b,
            op:info.op,
            flag:flag
        });
    }

    const opHandler= ()=>{
        if(info.a != 0 && info.b != 0){
            const res = 
                info.op == "+" ? info.a + info.b :
                info.op == "-" ? info.b - info.a :
                info.op == "X" ? info.a * info.b :
                info.op == "/" ? info.b / info.a : 
                info.a;
            
            setInfo({
                a:0,
                b:res,
                op:value,
                flag:info.flag  
            });
        }

        else{
            setInfo({
                a:0,
                b:info.a,
                op:value,
                flag:info.flag
            });
        }
        
    
    }

    const equalHandler= ()=>{
        if(info.op == "/" && info.a ==0){
            alert("Illegal division by zero!");
        }
        const res = 
            info.op == "+" ? info.a + info.b :
            info.op == "-" ? info.b - info.a :
            info.op == "X" ? info.a * info.b :
            info.op == "/" && info.a !=0 ? info.b / info.a :
            info.op == "/" && info.a ==0 ? 0:
            info.a;

        setInfo({
            a:res,
            b:0,
            op:"",
            flag:0  
        })
           
    }

    const percentageHandler= ()=>{
        setInfo({
            a:info.a/100,
            b:info.b/100,
            op:"",
            flag:info.flag  
        }) 
    }

    const signHandler= ()=>{
        setInfo({
            a: info.a * -1,
            b: info.b,
            op:info.op,
            flag:info.flag  
        }) 
    }
    
    const clickHandler= ()=>{
        value == "." ? dotHandler() :
        value == "AC" ? clearHandler() :
        value == "=" ? equalHandler():
        value == "%" ? percentageHandler(): 
        value == "+" ? opHandler():
        value == "-" ? opHandler():
        value == "/" ? opHandler():
        value == "X" ? opHandler():
        value == "+/-" ? signHandler():
        numberHandler();
    }    

    const getStyleName = () => {
        return value == "0" ? 'button zero' :
                value == "-" ? 'button operatio' :
                value == "X" ? 'button operatio' :
                value == "/" ? 'button operatio' :
                value == "=" ? 'button operatio' :
                value == "+" ? 'button operatio' :'button';
    }

    return(
        
        <button id={value} onClick={clickHandler} className={getStyleName()}> {value} </button>
    )
}

export default Button;