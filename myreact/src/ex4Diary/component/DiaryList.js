import './DiaryList.css';

export default function DiaryList() {
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