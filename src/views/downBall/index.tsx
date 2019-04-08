import React, { Component } from 'react';
import {  } from 'antd';
import './index.scss';
import ControlPage from '../../layout/components/ControlPage';

const PI = Math.PI
interface IProps {
  router: {
    goBack: () => {},
    push: (pathName: string) => {}
  }
}

interface IState {
  canvasWidth: number
  canvasHeight: number
}

interface IBallProps {
  radius: number, // 半径
  color: string, // 小球颜色
  ballHeight: number, // 小球高度
  speed: number, // 小球速度
  a: number, // 小球加速度
  bounce: number // 小球碰撞系数
  lineBottomY: number //  底部线位置
}


class DownBall extends Component<IProps, IState> {
  private ballProps: IBallProps
  private ballCanvas!: HTMLCanvasElement;
  private ballCanvasRender!: CanvasRenderingContext2D
  constructor (props: IProps) {
    super(props)
    const radius = 40
    this.state = {
      canvasWidth: 300,
      canvasHeight: 800
    }
    this.ballProps = {
      radius: radius,
      color: 'black',
      ballHeight: radius,
      speed: 0,
      lineBottomY: 700,
      bounce: -.7,
      a: .4
    }
  }

  componentDidMount () {
    this.ballCanvas = this.createInstance()
    this.ballCanvasRender = this.ballCanvas.getContext('2d') as CanvasRenderingContext2D
    this.createBottomLine()
    window.requestAnimationFrame(this.startAnimation.bind(this))
  }

  public createInstance (): HTMLCanvasElement {
    return document.getElementById('downBall') as HTMLCanvasElement
  }

  public createBottomLine () {
    this.ballCanvasRender.beginPath()
    this.ballCanvasRender.moveTo(0, this.ballProps.lineBottomY)
    this.ballCanvasRender.lineWidth = 1
    this.ballCanvasRender.lineTo(this.state.canvasWidth, this.ballProps.lineBottomY)
    this.ballCanvasRender.strokeStyle = 'black'
    this.ballCanvasRender.closePath()
    this.ballCanvasRender.stroke()
  }

  public startAnimation () {
    let { radius, color, ballHeight, lineBottomY, a, bounce } = this.ballProps
    const { canvasWidth, canvasHeight } = this.state
    this.ballCanvasRender.clearRect(0, 0, canvasWidth, canvasHeight);
    this.createBottomLine()
    this.ballCanvasRender.fillStyle = color
    this.ballCanvasRender.arc(canvasWidth / 2, ballHeight, radius, 0, PI * 2, false)
    this.ballCanvasRender.fill()
    this.ballProps.speed += a
    this.ballProps.ballHeight += this.ballProps.speed
    if (ballHeight + radius > lineBottomY) {
      this.ballProps.ballHeight = lineBottomY - radius
      this.ballProps.speed *= bounce
      if (Math.abs(this.ballProps.speed) < 2 * a) {
        return false
      }
    }
    window.requestAnimationFrame(this.startAnimation.bind(this))
  }

  render() {
    const { canvasWidth, canvasHeight } = this.state
    return (
      <div className="down-ball">
        <canvas id="downBall" width={ canvasWidth } height={ canvasHeight }></canvas>
        <ControlPage  {...this.props}/>
      </div>
    );
  }
}

export default DownBall;
