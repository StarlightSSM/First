import React, {useReducer, useRef, useEffect} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

const mockData = [
    {
        id:"mock1",
        date: new Date().getTime()-1,
        content: "mock1",
        emotionId: 1,
    },
    {
        id:"mock2",
        date: new Date().getTime()-2,
        content: "mock2",
        emotionId: 2,
    },
    {
        id:"mock3",
        date: new Date().getTime()-3,
        content: "mock3",
        emotionId: 3,
    },
]

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
    switch(action.type) {
        case "INIT":
        return action.data;
        case "CREATE":
        return [action.data, ...state];
        case "UPDATE":
        return state.map(
            (item)=>
                String(item.id) === String(action.data.id) ? {...action.data} : item
            
        );
        case "DELETE":
        return state.filter((item)=>String(item.id) !== String(action.targetId));
        default:{
            return state;
        }
    }
}

export default function App(){
    const idRef = useRef(0);
    const [data, dispatch] = useReducer(reducer, []);
    useEffect(
        ()=> {
            dispatch({type:"INIT", date:mockData})
        },
        []
    );

    const onCreate = (date, content, emotionId) => {
        dispatch({type:"CREATE", data:{
            id: idRef.current,
            date: new Date(date).getTime(),
            content,
            emotionId
        }})
        idRef.current += 1;
    }
    
    const onUpdate = (targetId, date, content, emotionId) => {
        dispatch({type:"UPDATE", data:{
            id: targetId,
            date: new Date(date).getTime(),
            content,
            emotionId
        }})
    }
    
    const onDelete = (targetId) => {
        dispatch({type:"DELETE", targetId})
    }
    
    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                <BrowserRouter>
                    <div className='App'>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/new" element={<New/>}/>
                            <Route path="/diary/:id" element={<Diary/>}/>
                            <Route path="/edit/:id" element={<Edit/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    )

}
