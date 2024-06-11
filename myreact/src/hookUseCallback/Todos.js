import {memo} from "react";

const Todos = ({todos, addTodo}) => {
    console.log("Todos가 렌더링 되고 있다.");
    return (
        <div>
            <h2>My Todos</h2>
            <button onClick={addTodo}>addTodo</button>
            {todos.map((todo, index)=>{
                    return <p key={index}>{todo}</p>;
            })}
        </div>
    )
}

export default memo(Todos);