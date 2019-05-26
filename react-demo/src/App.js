import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'


function App(props) {
  return (
    <div className="App">
        <h1>dfghj;k';lkjh</h1>
        <Link to="/a">a页</Link>
        <Link to="/b">b页</Link>
        {/* 路由配置 */}
        {props.children}
    </div>
  );
}

export default App;
