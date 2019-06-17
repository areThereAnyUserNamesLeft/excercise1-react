import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
      <div className="UserInput">
          <input onKeyDown={this.props.action} />
      </div>
    );
  }
}

export default UserInput;
