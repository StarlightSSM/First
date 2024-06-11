import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home(){
    return(
        <>Home page</>
    )
}

function Users(){
    return(
        <div>
            <h1>Users</h1>
            <ul>
                <li><Link to="1">User 1</Link></li>
                <li><Link to="2">User 2</Link></li>
            </ul>
            <Routes>
                <Route path=":userid" element={<UserDetail/>}/>
            </Routes>
        </div>
    )
}

function UserDetail(){
    const {userid} = useParams();
    return(
        <h2>User ID: {userid}</h2>
    )
}

// 기본 라우터 포하
export default function App(){
    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users/*" element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    )
}