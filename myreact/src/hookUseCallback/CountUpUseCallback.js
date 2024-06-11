import React, {useCallback, useState} from 'react';
import Todos from './Todos';

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

    const addTodo = useCallback( 
        () => {setTodos((t)=>[...t, "New Todo"])}, [todos]
    );

    return (
        <div>
            <div>
                <h2>My Todos - useCallback 없는 빈 껍데기!</h2>
                <Todos todos={todos} addTodo={addTodo} />
                <div>
                    <div>Count: {count}</div>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <hr/>
            <div>
                <h2>expensiveCalculation</h2>{calculation}
            </div>
        </div>
    )
}

export default CountUp;