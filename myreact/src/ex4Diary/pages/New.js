import Header from '../component/Header';
import {useNavigate} from 'react-router-dom';
import Editor from '../component/Editor';
import Button from '../component/Button';
import DiaryList from '../component/DiaryList';
import {useContext} from 'react';
import {DiaryDispatchContext} from '../App';

export default function New() {
    const {onCreate} = useContext(DiaryDispatchContext);
    const navigate = useNavigate();
    const goBack = () => {navigate(-1);}
    const onSubmit = (data) => {
        const {date, content, emotionId} = data;
        onCreate(date, content, emotionId);
        navigate("/", {replace:true});
    }
    return(
        <div>
            <Header title={"새 일기 쓰기"}
            leftChild={<Button text={"<- 뒤로 가기"} onClick={goBack}/>}
            rightChild={<Button text={"추가하기"} onClick={onCreate}/>} />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}