import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';
import AppHeader from './components/Header';
import AppContent from './components/Content';

interface IProps {

}

interface IState {

}

const { Header } = Layout

class AppLayout extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Layout>
        <AppHeader/>
        <AppContent>
          { this.props.children }
        </AppContent>
      </Layout>
    );
  }
}

export default AppLayout;
