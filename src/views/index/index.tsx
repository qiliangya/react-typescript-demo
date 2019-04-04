import React, { Component } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import './index.scss';

interface IProps {
  router: {
    push: (path: string) => {}
  }
}

interface IState {

}

class App extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {

    }
  }

  public routerToRotate = () => {
    this.props.router.push('/rotateCross')
  }

  public routerToDownBall = () => {
    this.props.router.push('/downBall')
  }

  render() {
    return (
      <div className="app-home">
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="旋转十字架" bordered={false} hoverable onClick = { this.routerToRotate }>
                使用canvas写的旋转十字架
              </Card>
            </Col>
            <Col span={8}>
              <Card title="自由落体的球" bordered={false} hoverable onClick = { this.routerToDownBall }>
                使用canvas模拟小球自由落体
              </Card>
            </Col>
            {/* <Col span={8}>
              <Card title="Card title" bordered={false} hoverable>Card content</Card>
            </Col> */}
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
