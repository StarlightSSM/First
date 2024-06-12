import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

export default function Home() {
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`
    const [pivotDate, setPivotDate] = useState(new Date());

    const data = useContext(DiaryStateContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(
        ()=>{

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
            <Headers 
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={filteredData}/>
        </div>
    )
}