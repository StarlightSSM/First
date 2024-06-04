import "./TodoEditor.css";
import {useState, useRef} from "react";

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onKeyDownEnter = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (!content) { // 추가할 때 빈 내용이면 추가 안되게 
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성 하기 ✏ </h4>
            <p>{content}</p>
            <div className="editor-wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDownEnter}
                    placeholder="새로운 Todo ..."
                    />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;