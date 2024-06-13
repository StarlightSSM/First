import {emotionList} from '../util';

export default function Viewer({content, emotionId}) {
    const emotionItem = emotionList.find((item)=>item.id === emotionId);
    return (
        <div className="Viewer">
            <section>
                <h4>오늘의 감정</h4>
                <div className={[`emotion-img-wrapper`, 
                    `emotion-img-wrapper-${emotionId}`].join(" ")}>
                        <img alt="" src={emotionItem.img}/>
                        <div className="emotion-descript">
                            {emotionItem.name}
                        </div>
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className="content-wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    )
}