import React, { Component } from 'react'

export default class B extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        Bhjgdfjhsgd
      </div>
    )
  }
}
