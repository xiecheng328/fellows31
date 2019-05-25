import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/lib/button';
import { 
  Row,
  Col
} from 'antd';
import NavLeft from './component/NavLeft'
import CHeader from './component/CHeader';
import CFooter from './component/CFooter';
import Home from './page/Home/index';

function App() {
  return (
    <div className="App">
        <Row>
          <Col span={4} className="navleft" >
              <NavLeft></NavLeft>
          </Col>
          <Col span={20}  >
              <CHeader></CHeader>
              <Home></Home>
              <CFooter/>
          </Col>
        </Row>
    </div>
  );
}

export default App;
