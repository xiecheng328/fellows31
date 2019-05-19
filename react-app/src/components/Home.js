import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'

export default class Home extends Component {
  constructor(params) {
    super(params);
    this.state = {
      flag:true
    }
  }
  render() {
    return (
      <div>
          首页
          <button onClick={()=>{
              console.log(this.props.history.push('/b'));
            }
          }>跳转到到B页面</button>

          <Prompt when={this.state.flag} message="确认离开吗？"></Prompt>
      </div>
    )
  }
}
