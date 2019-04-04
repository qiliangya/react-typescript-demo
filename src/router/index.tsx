import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

import App from '../views/index'
import AppLayout from '../layout';
import RotateCross from '../views/rotateCross';
import DownBall from '../views/downBall';


export default class RouterConfig extends React.Component {
  constructor (props: any) {
    super(props)
  }

  public render () {
    return (
        <Router history = { browserHistory }>
          <Route path="/" component={ AppLayout }>
            <IndexRoute component={ App }/>
            <Route path="/rotateCross" component = { RotateCross }></Route>
            <Route path="/downBall" component = { DownBall }></Route>
          </Route>
        </Router>
      
    )
  }
}