import React, { createContext, useCallback, useContext, useState } from "react";

const CountContext = createContext();
const CountProvider = ({children}) => {
    const [count, setCount] = useState(0); // 전역 컨텍스트
    const increment = () => {
        setCount((prevCount)=>prevCount+1);
    }
    return (
        <CountContext.Provider value={{count, increment}}>
            {children}
        </CountContext.Provider>
    )
}

const useCount = () => useContext(CountContext);

function Level1() {
    const {increment} = useCount();
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>Level 1</h2>
            <button onClick={increment}>+</button>
            <Level2/>
        </div>
    )
}

function Level2() {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>Level 2</h2>
            <Level3/>
        </div>
    )
}

function Level3() {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>Level 3</h2>
            <Level4/>
        </div>
    )
}

function Level4() {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>Level 4</h2>
            <Level5/>
        </div>
    )
}

function Level5() {
    const {count} = useCount();
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>Level 5</h2>
            <p>Count: {count}</p>
        </div>
    )
}

export default function App() {
    return (
        <CountProvider>
            <div>
                <h1>Top Level: Context Api</h1>
                <Level1/>
            </div>
        </CountProvider>
    )
}