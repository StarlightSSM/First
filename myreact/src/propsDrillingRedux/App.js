import React from 'react';
import { createStore } from 'redux';
import {Provider, connect} from 'react-redux';
import reducer, {increment} from './reducer';

const mapProps = state=>{return{value:state.count}};
const mapDispatch = {increment};
const store = createStore(reducer);

const Level5 = ({value}) => {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h1>Level 5</h1>
            <p>Value: {value}</p>
        </div>
    )
};

const Level5Connected = connect(mapProps)(Level5);

const Level4 = () => {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h1>Level 4</h1>
            <Level5Connected/>
        </div>
    )
};

const Level3 = () => {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h1>Level 3</h1>
            <Level4/>
        </div>
    )
};

const Level2 = () => {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h1>Level 2</h1>
            <Level3/>
        </div>
    )
};

const Level1 = ({value, increment}) => {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            <h1>Level 1</h1>
            <div>Value: {value}</div>
            <button onClick={increment}>+</button>
            <Level2/>
            {/* <Level1Connected/> 무한로딩?? */}
        </div>
    )
};

const Level1Connected = connect(mapProps, mapDispatch)(Level1);

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Props drilling - redux</h1>
                <Level1/>
            </div>
        </Provider>
    )
}

export default App;