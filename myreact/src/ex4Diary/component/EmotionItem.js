

export default function EmotionItem ({id, img, name, onClick, isSelected}){

    return (
        <div className={
            ["EmotionItem", isSelected ? `EmotionItem-on-${id}` : `EmotionItem-off`].join(" ")
        }
        onClick={onClick}>
            <img alt="" src={img}/>
            <span>{name}</span>
        </div>
    )
};