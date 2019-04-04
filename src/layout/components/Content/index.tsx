import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';

interface IProps {

}

interface IState {

}

const { Content } = Layout

class AppContent extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Content className="Content">
        { this.props.children }
      </Content>
    );
  }
}

export default AppContent;
