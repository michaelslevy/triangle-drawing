import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Triangle extends Component {

  //Triangle takes in side length, top x, top y, direction and calculates coordinates.
  //Color is changeable
  //Every triangle has a unique identifier

  //todo: answer question can click/touch states work on an svg element on desktop and mobile
  coordBase={
    p1:[0,0],
    p2:[120, 0],
    p3:[60, 103.923]
  }

  constructor(){
    super();

    this.state={
      p1:[0,0],
      p2:[0, 0],
      p3:[0, 0]
    }
  }

  componentDidMount(){
    this.calculateCoordinates();
  }

  calculateHeight=function(){
    let bSquared=Math.pow((this.props.side/2),2);
    let cSquared=Math.pow(this.props.side,2);
    let a=Math.sqrt(cSquared-bSquared);
    return a;
  }

  calculateCoordinates = function (){
    //adjust offset
    let altitude = this.calculateHeight();
    let p2=[this.props.side,0];
    let p3=[(this.props.side/2),altitude];
    this.setState({ p2, p3 });
  }

  render() {
    return (<polygon points={`${this.state.p1[0]} ${this.state.p1[1]},
      ${this.state.p2[0]} ${this.state.p2[1]},
      ${this.state.p3[0]} ${this.state.p3[1]},
      ${this.state.p1[0]} ${this.state.p1[1]}`}
      fill={this.props.fill} />
    );
  }
}

export default Triangle;
