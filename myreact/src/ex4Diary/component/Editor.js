import { useNavigate } from "react-router-dom";
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import React, { useState, useEffect, useCallback } from "react";
import EmotionItem from './EmotionItem';

export default function Editor({initData, onSubmit}) {
    const navigate = useNavigate();
    const [state, setState] = useState({
        date:getFormattedDate(new Date()),
        EmotionId: 3,
        content:""
    })
    useEffect(
        ()=>{
            if(initData) {
                setState({
                    ...initData,
                    date: getFormattedDate(new Date(parseInt(initData.date)))
                })
            }
        }, [initData]
    );

    const changeDateHandler = (e) => {
        setState({...state, date: e.target.value})
    };

    const changeEmotionHandler = useCallback(
        (emotionId)=>{setState((state)=>({...state, emotionId}))}, []
    );

    const changeContentHandler = (e) => {
        setState({...state, content: e.target.value})
    };

    const onSubmitHandler = () => {onSubmit(state)};
    const onGoBackHandler = () => {navigate(-1)};
    return(
        <div className="Editor">
            <div className="input-wrapper">
                <h4>오늘의 날짜</h4>
                <input type="date" value={state.date} onChange={changeDateHandler}/>
            </div>
            <div className="editor-wrapper">
                <h4>오늘의 감정</h4>
                <div className="input-wrapper emotion-list-wrapper">
                    {
                        emotionList.map(
                            (item)=>{
                                <EmotionItem key={item.id} {...item}
                                onClick={changeEmotionHandler}
                                isSelected={state.emotionId === item.id}
                                />
                            }
                        )
                    }
                </div>
            </div>
            <div className="editor-section">
                    <h4>오늘의 일기</h4>
                    <div className="input-wrapper">
                        <textarea placeholder="오늘은 어땠나요? 적어 보세요!:)"
                        value={state.content}
                        onChange={changeContentHandler}/>
                    </div>
            </div>
            <div className="editor-section">
            <Button text={"취소 하기"} onClick={onGoBackHandler}/>
            <Button text={"작성 완료"} onClick={onSubmitHandler}/>
            </div>
        </div>
    )
}