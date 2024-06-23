import React, { useContext, useState, useEffect } from "react";
import { ProfileStateContext, ProfileDispatchContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css"; 

const Edit = ()=>{
    const { id } = useParams();
    const data = useContext(ProfileStateContext);
    const { onUpdate, onDelete } = useContext(ProfileDispatchContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const goBack = () => {
        navigate("/");
      };
    
  useEffect(() => {

    const currentItem = data.find(item => String(item.id) === id);
    if (currentItem) {
      setName(currentItem.name);
      setContent(currentItem.content);
      setImage(currentItem.image);
    }
  }, [data, id]);

  const handleSubmit = () => {
    onUpdate(id, name, content, image);
    window.alert("수정이 완료되었습니다!"); 
    navigate('/'); 
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (confirmDelete) {
      onDelete(id);
      navigate("/");
    }
  };

return(
    <div className="Container">
        <h2>멤버 프로필 수정</h2>

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

        <div className="ActionButtons">
          <button onClick={goBack}>취소</button>
          <button onClick={handleDelete}>삭제</button>
          <button onClick={handleSubmit}>등록</button>
        </div>
    </div>
    )
}
export default Edit;