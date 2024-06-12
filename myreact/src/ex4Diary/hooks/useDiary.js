import { useEffect, useState } from 'react';
import {DiaryStateContext} from '../App'
import { useNavigate } from 'react-router-dom';

export default function useDiary(id){
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigate = useNavigate();

    useEffect(
        ()=>{
            const matchDiary = data.find((item)=>String(item.id) === String(id));
            if(matchDiary){
                setDiary(matchDiary);
            }
            else{
                alert("해당되는 일기가 없습니다.");
                navigate("/", {replace:true});
            }
        }, [id, data]
    );
    return diary;
}