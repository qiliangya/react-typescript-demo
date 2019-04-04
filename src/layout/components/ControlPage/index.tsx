import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import './index.scss';

interface IProps {
  router: {
    goBack: () => {},
    push: (pathName: string) => {}
  }
}

interface IState {

}

class ControlPage extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {

    }
  }

  public backIndex = () => {
    this.props.router.push('/')
  }

  render() {
    return (
      <Button.Group size= 'large'>
        <Button type="primary">
          <Icon type="left" />上一个
        </Button>
        <Button type="primary" onClick = { this.backIndex }>
          返回首页
        </Button>
        <Button type="primary">
          下一个<Icon type="right" />
        </Button>
      </Button.Group>
    );
  }
}

export default ControlPage;
