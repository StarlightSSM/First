import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(
        () => {
            console.log('Component mounted');
            return () => {
                console.log("component will unmounted");
            }
        },
        []
    );
    useEffect(
        ()=>{console.log("Count state has changed:")}, [count]
    );
    useEffect(
        ()=>{console.log("Count, Name state has changed:", count, name)},
        [count, name]
    );
    
    const increment = () => {
        setCount(count + 1);
    }
    const onNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <button onClick={increment}>증가하기</button>
            <input type="text" value={name} onChange={onNameChange}/>
            <p>Count: {count}</p>
            <p>Name: {name}</p>
        </div>
    );
}

export default Counter;