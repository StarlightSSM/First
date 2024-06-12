import React from "react";
import {useNavigate} from "@reduxjs/toolkit";
import './DiaryItem.css';
import {getEmotionImgById} from '../util';
import Button from './Button';

export default function DiaryItem({id, emotionId, content, date}){
    const navigate = useNavigate();
    const goDetail = () => {navigate(`/diary/${id}`)};
    const goEdit = () => {navigate(`/edit/${id}`)};
    return(
        <div className="DiaryItem">
            <div onClick={goDetail} 
            className={["img-section", `img-section-${emotionId}`].join(" ")}>
                <img src={getEmotionImgById(emotionId)}/>
            </div>
            <div className="info-section" onClick={goDetail}>
                <div className="data-wrapper">
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                <div className="content-wrapper">
                    {content.slice(0, 25)}
                </div>
            </div>
            <div className="button-section">
                <Button text={"수정하기"} onClick={goEdit}/>
            </div>
        </div>
    )
}