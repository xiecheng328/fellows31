import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import A from './components/A'
import B from './components/B'
function App() {
  return (
    <div className="App">
        <div>HAHA</div>
        <Router>
            <Link to="/a">A页面</Link>
            ----
            <Link to="/b">B页面</Link>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
        </Router>
    </div>
  );
}

export default App;
