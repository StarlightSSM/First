import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>증가하기</button>
            <button onClick={decrement}>감소하기</button>
        </div>
    )
}

export default Counter;