import React, { useReducer, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Search from "./pages/Search";
import Edit from "./pages/Edit";
import { BrowserRouter } from "react-router-dom";

const mockData = [
  {
    id: "0",
    image: `${process.env.PUBLIC_URL}/img/emotion1.png`,
    name:"김동하",
    content:"저는 김동하입니다"
  },
  {
    id: "1",
    image: `${process.env.PUBLIC_URL}/img/emotion2.png`,
    name:"신수민",
    content:"저는 신수민입니다"
  },
  {
    id: "2",
    image: `${process.env.PUBLIC_URL}/img/emotion3.png`,
    name:"박의영",
    content:"저는 박의영입니다"
  },  
  {
    id: "3",
    image: `${process.env.PUBLIC_URL}/img/emotion4.png`,
    name:"안예빈",
    content:"저는 안예빈입니다"
  }
];

function reducer(state,action) {
  switch(action.type){
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id)? {...action.data}:it 
      )
    }
    case "DELETE": {
      return state.filter((it)=>String(it.id)!==String(action.targetId));
    }
      default:{
        return state;
    }
  }

}

export const ProfileStateContext = React.createContext();
export const ProfileDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef =useRef(4);
  useEffect(()=>{
    dispatch({
      type:"INIT",
      data:mockData,
    })
  },[]);

  const onCreate = (name, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        name,
        content,
        image: "/emotion5.png",
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId,name, content,image) => {  
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        name,
        content,
        image,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return(
    <ProfileStateContext.Provider value={data}>
      <ProfileDispatchContext.Provider value={{  onCreate,   onUpdate,     onDelete   }}>
       <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/search" element={<Search />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
        </BrowserRouter>
      </ProfileDispatchContext.Provider>
    </ProfileStateContext.Provider>
  )
}
export default App;