import React, {useContext, useState} from "react";
import { ProfileStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 



function Home (){
    const data = useContext(ProfileStateContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const nextProfile = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      };
    
      const prevProfile = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      };
      if (data.length === 0) return <div>Loading...</div>;
      
      const onAdd =()=>{
        navigate("/new",{replace:true});
      }
      const onEdit = () => {
        navigate(`/edit/${data[currentIndex].id}`, { replace: true });
    };
      const onSearch = ()=>{
        navigate("/search",{replace:true});
      }
    return(

        <div className="Container">
            <div className="Button">
                <button onClick={prevProfile}>이전</button>
                <button onClick={nextProfile}>다음</button>
            </div>
            <div className="Profile">
                <img src={data[currentIndex].image} alt={data[currentIndex].name} />
                <h2>{data[currentIndex].name}</h2>
                <h2>{data[currentIndex].content}</h2>
            </div>

            <div className="ActionButtons">
                <button onClick={onAdd}>추가</button>
                <button onClick={onEdit}>수정</button>
                <button onClick={onSearch}>검색하기</button>
            </div>

        </div>

    )
    
}
export default Home;