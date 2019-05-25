import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/lib/button';
import { 
  Button ,
  Icon,
  Menu,
  Row,
  Col
} from 'antd';
const { SubMenu } = Menu;
function App() {
  return (
    <div className="App">
        <Row>
          <Col span={4}  >
            <div>
                
            </div>
            <Menu theme="dark" mode="inline">
              <Menu.Item><Icon type="bank"></Icon>菜单项</Menu.Item>
              <SubMenu title="子菜单">
                <Menu.Item>子菜单项</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={20}  >right</Col>
        </Row>
    </div>
  );
}

export default App;
