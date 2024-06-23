import React, { useContext, useState } from "react";
import { ProfileDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./New.css"; 

const New = ()=>{
    const { onCreate } = useContext(ProfileDispatchContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    const goBack = () => {
        navigate("/");
      };
    


    const handleSubmit = ()=>{
        if (name.trim() === "" || content.trim() === "") {
            alert("이름과 내용을 입력해주세요.");
            return;
          }
          onCreate(name, content);
          window.alert("멤버가 등록되었습니다!");
          goBack();
    }
return(
    <div className="Container">
        <h2>새로운 멤버 등록</h2>
        <div className="new_Profile">
            <div className="name">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="content">
                <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)}
                rows={4} 
                cols={50} 
                placeholder="내용을 입력해주세요"
                />
        </div>
        </div>

        <div className="ActionButtons">
            <button onClick={goBack}>취소</button>
            
            <button onClick={handleSubmit}>등록</button>
        </div>

    </div>
    )
}
export default New;