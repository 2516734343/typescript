import React, { Component } from 'react';

interface IProps {
  num: number
}

interface IState {
  msg: string;
}

class CompClass extends Component<IProps, IState> {
  state: IState = {
    msg: '1'
  }
  render() {
    return (
      <div>
        porps: {this.props.num} state: {this.state.msg}
      </div>
    );
  }
}

export default CompClass;