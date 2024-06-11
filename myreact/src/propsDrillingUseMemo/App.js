import React, {useMemo, useState} from 'react';

// App - Level1 : Level2 : Level3 : Level4 : Level5
// App: count 상태 관리
// Level1to4: count props pass
// Level5: count 출력

// props drilling: 문제점, 너무 길어지면 지연 요소 생김(깜빡임)
// 회피 / 해결 방법: 전역, 
function Level5({count}) {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>level 5</h2>
            <p>Count: {count}</p>
        </div>
    )
}

function Level4({count}) {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>level 4</h2>
            <Level5 count={count}/>
        </div>
    )
}

function Level3({count}) {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>level 3</h2>
            <Level4 count={count}/>
        </div>
    )
}

function Level2({count}) {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>level 2</h2>
            <Level3 count={count}/>
        </div>
    )
}

function Level1({count}) {
    return(
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h2>level 1</h2>
            <Level2 count={count}/>
        </div>
    )
}

const App = () => {
    const [count, setCount] = useState(0);
    const memoCount = useMemo(()=>count, [count]);

    return (
        <div>
            <h1>Props Drilling useMemo {useMemo}</h1>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <Level1 count={memoCount}/>
        </div>
    )
}

export default App;