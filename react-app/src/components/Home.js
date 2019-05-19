import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
          首页
          <button onClick={()=>{
              console.log(this.props.history.push('/b'));
            }
          }>跳转到到B页面</button>
      </div>
    )
  }
}
