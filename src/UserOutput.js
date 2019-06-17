import React, { Component } from 'react';
import './App.css';

class UserOutput extends Component {
  render() {
    return (
      <div className="UserOutput">
          <p>{this.props.username}</p>
          <p/>
      </div>
    );
  }
}

export default UserOutput;
