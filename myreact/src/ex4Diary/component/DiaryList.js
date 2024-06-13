import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";

const sortOptionList = [
    {value:"latest", name:"최신 순"},
    {value:"oldest", name:"오래된 순"},
]

export default function DiaryList({data}) {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [sortedData, setSortedData] = useState([]);

    useEffect(
        ()=> {
            const compare = (a, b) =>{
                if (sortType === "latest") {
                    return Number(b.data) - Number(a.data);
                }
                else {
                    return Number(a.data) - Number(b.data);
                }
            }
            const copyList = JSON.parse(JSON.stringify(data))
            copyList.sort(compare);
            setSortedData(copyList);
        }, [data, sortType]
    )

    const onChangeSortType = (event) => {
        setSortType(event.target.value);
    }

    const onClickNew = () => {
        navigate("/new")
    }
    return (
        <div className="DiaryList">
            <div className="menu-wrapper">
                <div className="left-col">
                    <select value={sortType} onChange={onChangeSortType}>
                        {sortOptionList.map((item, index)=>(
                            <option key={index} value={item.value}>
                                {item.name}
                            </option>))}
                    </select>
                </div>
                <div className="right-col">
                    <Button text={"새 일기 쓰기"} onClick={onClickNew}/>
                </div>
            </div>
            <div className="list-wrapper">
                {
                    sortedData.map((item)=>(<DiaryItem key={item.id}{...item}/>))
                }
            </div>
        </div>
    )
}