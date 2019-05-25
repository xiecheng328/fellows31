import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/lib/button';
import { 
  Row,
  Col
} from 'antd';
import NavLeft from './component/NavLeft'

function App() {
  return (
    <div className="App">
        <Row>
          <Col span={4}  >
              <NavLeft></NavLeft>
          </Col>
          <Col span={20}  >right</Col>
        </Row>
    </div>
  );
}

export default App;
