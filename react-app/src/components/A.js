import React, { Component } from 'react'

export default class A extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        AAAAA
      </div>
    )
  }
}
