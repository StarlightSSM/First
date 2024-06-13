import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import Header from '../component/Header';
import Button from '../component/Button';
import DiaryList from "../component/DiaryList";
import { getMonthRangeById } from "../util";

export default function Home() {
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`   

    const data = useContext(DiaryStateContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(
        ()=>{
            if(data.length>=1) {
                const {beginTimeStamp, endTimeStamp} = getMonthRangeById(pivotDate);
                setFilteredData(
                    data.filter(
                        item=>beginTimeStamp <= item.date && item.date <= endTimeStamp
                    )
                )
            } else {
                setFilteredData([]);
            }
        }, [data, pivotDate]
    )

    const onDecreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };
    const onIncreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };
    
    return(
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={filteredData}/>
        </div>
    )
}