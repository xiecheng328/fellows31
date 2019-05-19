import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Link, 
  Route,
  Switch
} from 'react-router-dom'
import A from './component/A'
import B from './component/B'
import D from './component/D'
import E from './component/E'
import Count from './component/Count'




function App() {
  return (
    <div className="App">
        <Router>
            <Link to="/">A页面</Link>
            <Link to="/b/5">B页面</Link>
            <Link to="/c">C页面</Link>
            <Link to="/d">D页面</Link>
            <Link to="/count">count页面</Link>
            {/* <Route path="/" component={A}></Route>
            <Route path="/b" component={B}></Route> */}
            {/* <Switch> */}
              <Route path="/b/:id" component={B}></Route>
              <Route path="/c" render={()=>{
                return <h1>ccc</h1>
              }}></Route>
              <Route exact path="/d" children={(props)=>{
                console.log(props,'lllll');
                return <D></D>
              }}></Route>
              <Route exact path="/" component={A}></Route>
              <Route path="/count" component={Count}></Route>
            {/* </Switch> */}


        {/* <E></E> */}

        </Router>
    </div>
  );
}

export default App;
