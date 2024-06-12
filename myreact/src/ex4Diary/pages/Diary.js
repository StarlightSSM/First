import {useNavigate, useParams} from 'react-router-dom';
import {DiaryDispatchContext} from "../App";
import {getFormattedDate} from "../util";
import { useContext } from "react";
import useDiary from '../hooks/useDiary';
import Header from "../component/Header";
import Button from '../component/Button';
import Viewer from '../component/Viewer';

export default function Diary() {
    const {id} = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    const {date, content, emotionId} = data;
    const title = `${ getFormattedDate(new Date(Number(date)))} 기록`;

    return(
        <div>
            <Header
                title={title}
                leftChild={<Button text={"<- 뒤로 가기"} onClick={goBack}/>}
                rightChild={<Button text={"수정하기"} onClick={goEdit}/>}
            />
            <Viewer content={content} emotionId={emotionId}/>
        </div>
    )
}