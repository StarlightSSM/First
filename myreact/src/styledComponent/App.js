import styled from 'styled-components';
import "./App.css";

const SimpleButton = styled.button`
    color:white;
    background-color:green;
`;

const myStyle4 = {
    backgroundColor: "red",
    color:"blue"
}

const LargeButton = styled(SimpleButton)`
    font-size: 50px;
`;

const ReactButton = props=>{
    console.log('props', props);
    return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`;

const PrimaryButton = styled.button`
    color: ${
        function(props){
            console.log("props", props);
            if(props.primary){return "white"}
            else {return "blue"}
        }
    }
`
export default function App(){
    return(
        <div>
            <div>
                <h2>서로 다른 스타일 표현 방법</h2>
                <button className='myButton'>React outer style</button>
                <button style={{backgroundColor:"red"}}>React inline style</button>
                <SimpleButton>Simple</SimpleButton>
                <button style={myStyle4}>myStyle4</button>
            </div>
            <div>
                <h3>스타일 상속</h3>
                <LargeButton>상속된 라지 버튼</LargeButton>
            </div>
            <div>
                <h3>Component</h3>
                <ReactButton>React</ReactButton>
                <ReactLargeButton>ReactLargeButton</ReactLargeButton>
            </div>
            <div>
                <PrimaryButton>PrimaryButton</PrimaryButton>
            </div>
        </div>
    )
}