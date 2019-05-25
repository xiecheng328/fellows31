import React, { Component } from 'react'
import { Menu ,Icon} from 'antd';
import menuList from './../../config/menuconfig'
const {SubMenu} = Menu;

export default class NavLeft extends Component {
    createMenu = (menuList) => {
        let list = menuList.map((elem)=>{
            return (
                <Menu.Item>
                    <Icon type={elem.icon}></Icon>
                    {elem.title}
                </Menu.Item>)
        })
        this.setState({
            list
        })
    }
    componentWillMount = () => {
      this.createMenu(menuList);
    }
    
    render() {
        return (
        <div>
            <Menu theme="dark" mode="inline">
               {this.state.list}
            </Menu>
        </div>
        )
    }
}
