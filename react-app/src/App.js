import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  Prompt,
  NavLink
} from 'react-router-dom'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import Home from './components/Home'
import Children from './components/Children';
import F from './components/F';
import './App.css'

let Jump = (props) =>{
  return <Link to={props.to}>{props.children}</Link>
}
function App() {
  return (
    <div className="App">
        <div>HAHA</div>
        <Router>
            <NavLink exact activeClassName="selected" to="/">首页面</NavLink>
            ----
            <NavLink to="/a/5" activeClassName="selected" >A页面</NavLink>
            ----
            <NavLink activeStyle={{color:'green'}} to="/b">B页面</NavLink>
            ----
            <NavLink to="/c/666" isActive={()=>{
              return true;
            }}>C页面</NavLink>
            ----
            <NavLink to="/d">D页面</NavLink>
            <NavLink to="/children">children</NavLink>
            <NavLink to="/e">重定向</NavLink>

            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route> */}
            {/* <Switch>
              <Route path="/a/:id" component={A}></Route>
              <Route path="/b" component={B}></Route>
              <Route path="/c/:num" component={C}></Route>
              <Route path="/d" render={()=>{
                return <h1>render dddd</h1>
              }}></Route>
              <Route path="/" component={Home}></Route>
            </Switch> */}
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/a/:id" component={A}></Route>
              <Route exact path="/b" component={B}></Route>
              <Route exact path="/c/:num" component={C}></Route>
              <Route exact path="/d" render={()=>{
                return <h1>render dddd</h1>
              }}></Route>
              <Route path="/children" children={(props)=>{
                 let str = props.match?'1111':'0000';
                 console.log(str)
                 return <Children str={str}></Children>
              }}></Route>
              <Route path="/e" render={()=><Redirect to="/"></Redirect>}></Route>
              <Jump to="/xxx">xxx</Jump>
              <hr></hr>
              <F></F>
        </Router>
    </div>
  );
}

export default App;
