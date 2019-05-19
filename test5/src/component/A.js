import React, { Component } from 'react'

export default class A extends Component {

  render() {
      console.log(this.props)
    return (
      <div>
        A
        <button onClick={()=>{
            this.props.history.push('/c')
            }
        }> 跳转到C</button>
      </div>
    )
  }
}
