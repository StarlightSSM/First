import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";

const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      createdDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "빨래 널기",
      createdDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "노래 연습하기",
      createdDate: new Date().getTime(),
    },
  ];

function App() {
    const [todo, setTodo] = useState(mockTodo); // 상태가 변경되면 re-render링
    //const idRef = useRef(3); // 다시 그려도 변경 되지 않고 기억하고 싶은 값
    const idRef = useRef(3); // const idRef = 3과 같이, 만약 3을 일반 변수에 저장한다면?
                             // 잠깐씩 기능처리를 위해서 계산에 필요한 공간 => 변수 
    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            isDone: false,
            content: "React 공부하기",
            createdDate: new Date().getTime(),
        }
        setTodo([newItem, ...todo]);
        idRef.current += 1; // nextId랑 같음
    };

    const onUpdate = (targetId) => {
        setTodo(
            todo.map(
                (item) => item.id === targetId ? {...item, isDone : !item.isDone} : item
            )
        )
    };

    const onDelete = (targetId) => {
        setTodo(todo.filter((item)=>item.id !== targetId))
    };

    return (
        <div className="App">
            <Header/>
            <TodoEditor onCreate={onCreate}/>
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    )
}

export default App;