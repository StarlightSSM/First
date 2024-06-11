// npm i @reduxjs/toolkit
import React from 'react';
import {configureStore, createSlice} from '@reduxjs/toolkit';
import {Provider, useSelector, useDispatch} from 'react-redux';
// import { increment } from '../propsDrillingRedux/reducer';

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment: (state)=>{state.value+=1},
        decrement: (state)=>{state.value-=1}
    }
})

const {increment, decrement} = counterSlice.actions;
const counterReducer = counterSlice.reducer;
const store = configureStore({reducer:{counter: counterReducer}})

function Counter(){
    const count = useSelector(state=>state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}

export default function App () {
    return (
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    )
}
