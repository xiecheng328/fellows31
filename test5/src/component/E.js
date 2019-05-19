import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class E extends Component {
  render() {
    return (
      <div>
        eeee
        {console.log(this.props,'eee')}
      </div>
    )
  }
}
export default withRouter(E);

