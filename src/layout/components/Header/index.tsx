import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';

interface IProps {

}

interface IState {

}

const { Header } = Layout

class AppHeader extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Header className="header">react-typescript-canvas-demo</Header>
    );
  }
}

export default AppHeader;
