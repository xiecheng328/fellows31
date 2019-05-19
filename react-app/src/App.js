import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import Home from './components/Home'
import Children from './components/Children';
import F from './components/F';

let Jump = (props) =>{
  return <Link to={props.to}>{props.children}</Link>
}
function App() {
  return (
    <div className="App">
        <div>HAHA</div>
        <Router>
            <Link to="/">首页面</Link>
            ----
            <Link to="/a/5">A页面</Link>
            ----
            <Link to="/b">B页面</Link>
            ----
            <Link to="/c/666">C页面</Link>
            ----
            <Link to="/d">D页面</Link>
            <Link to="/children">children</Link>
            <Link to="/e">重定向</Link>

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
