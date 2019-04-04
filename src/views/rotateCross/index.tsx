import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import './index.scss';
import ControlPage from '../../layout/components/ControlPage';

interface ICanvasProps {
  width: number
  height: number
}

interface IProps {
  router: {
    goBack: () => {},
    push: (pathName: string) => {}
  }
}

interface IState {
  canvasProps: ICanvasProps
}

class RotateCross extends Component<IProps, IState> {
  public speed: number = 1
  public rectWidth: number = 10
  public deg: number = 0
  public canvas: CanvasRenderingContext2D | undefined
  constructor (props: IProps) {
    super(props)
    this.state = {
      canvasProps: {
        width: 300,
        height: 300
      }
    }
  }

  public initCanvas (): void {
    let ctx :HTMLCanvasElement = document.getElementById('myCanvas') as HTMLCanvasElement
    this.canvas = ctx.getContext('2d') as CanvasRenderingContext2D
    
    // this.createBorder(this.canvas)
    this.createAnimation()
  }

  private startRotate (direction: number) {
    if (!this.canvas) {
      return false
    }
    const { canvasProps } = this.state
    const centerX: number = canvasProps.width / 2
    const centerY: number = canvasProps.height / 2
    const disXY: number = centerX - this.rectWidth
    this.canvas.translate(centerX, centerY)
    this.canvas.rotate(this.deg * Math.PI / 180)
    this.canvas.translate(-centerX, -centerY)
    this.canvas.fillStyle = '#f99';
    if (direction === 1) {
      this.canvas.fillRect(disXY, 0, this.rectWidth * 2, canvasProps.width)
    } else {
      this.canvas.fillRect(0, disXY, canvasProps.width, this.rectWidth * 2)
    }
    this.canvas.setTransform(1, 0, 0, 1, 0, 0);
  }

  private createAnimation () {
    if (this.canvas) {
      // if (this.deg !== 360) {
        this.canvas.clearRect(0, 0, this.state.canvasProps.width, this.state.canvasProps.height);
        this.deg += this.speed
        this.startRotate(1)
        this.startRotate(2)
        window.requestAnimationFrame(this.createAnimation.bind(this))
      // }
    }
  }

  private createBorder (canvas: CanvasRenderingContext2D) {
    canvas.lineWidth = 1
    canvas.strokeStyle = 'black'
    canvas.strokeRect(0, 0, 300, 300)
  }

  public componentDidMount () {
    this.initCanvas()
  }

  render() {
    const { canvasProps } = this.state
    return (
      <div className="App">
        <canvas id="myCanvas" width={ canvasProps.width } height={ canvasProps.height }></canvas>
        <p className="text-center">旋转十字架</p>
        <ControlPage {...this.props}/>
      </div>
    );
  }
}

export default RotateCross;
