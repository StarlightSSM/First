import React, {useState} from 'react';

const expenpensiveCalculation = (num) => {
    console.log("계산 중이에요. 좀 오래 걸릴 것 같아요.");
    for (let i = 0; i < 200000000; i++) {
        num += 1;
    }
    return num;
}
const CountUp = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation = expenpensiveCalculation(count);

    const increment = () => {
        setCount(cnt=>cnt+1)
    };

    const addTodo = () => {
        setTodos(t=>[...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos - useMemo 없는 빈 껍데기!</h2>
                <button onClick={addTodo}>AddTodo</button>
                {
                    todos.map(
                        (todo, index) => (<p key={index}>{todo}</p>)
                    )
                }
            </div>
            <hr/>
            <div>
                <div>Count: {count}</div>
                <button onClick={increment}>+</button>
                <h2>expensiveCalculation</h2>{calculation}
            </div>
        </div>
    )
}

export default CountUp;