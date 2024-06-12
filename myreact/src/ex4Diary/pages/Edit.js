import {useNavigate, useParams} from 'react-router-dom';
import {DiaryDispatchContext} from "../App";
import { useContext } from "react";
import useDiary from '../hooks/useDiary';
import Header from "../component/Header";
import Editor from '../component/Editor';
import Button from '../component/Button';

export default function Edit() {
    const {id} = useParams();
    const data = useDiary(id);
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const navigate = useNavigate();
    const goBack = () => {navigate(-1);}
    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 복구 안됩니다.")) {
            onDelete(id);
            navigate("/", {replace: true});
        }
    }

    const onSubmit = (data) => {
        if(window.confirm("수정할까요?")){
            const {date, content, emotionId} = data;
            onUpdate(id, date, content, emotionId);
            navigate("/", {replace:true});
        }
    }

    return(
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={"<- 뒤로 가기"} onClick={goBack}/>}
                rightChild={<Button text={"삭제하기"} onClick={onClickDelete}/>}
            />
            <Editor initData={data} onSubmit={onSubmit}/>
        </div>
    )
}