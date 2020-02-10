import React, { Component } from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { calculateTriangleAltitude } from "../../helpers/calculations"

const mapStateToProps = (store) => {
  return {
    palette:store.settings.palette
  }
}

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

  calculateCoordinates = function (){
    let altitude = calculateTriangleAltitude(this.props.side);

    if(this.props.direction==="up"){
      let p1=[(0+this.props.x),(altitude+this.props.y)]
      let p2=[(this.props.side+this.props.x),(altitude+this.props.y)];
      let p3=[(this.props.side/2+this.props.x),this.props.y];
      this.setState({ p1, p2, p3 });
    } else {
      let p1=[this.props.x,this.props.y]
      let p2=[(this.props.side+this.props.x),this.props.y];
      let p3=[(this.props.side/2+this.props.x),(altitude+this.props.y)];
      this.setState({ p1, p2, p3 });
    }
  }

  render() {
    return (<polygon points={`${this.state.p1[0]}  ${this.state.p1[1]},
      ${this.state.p2[0]} ${this.state.p2[1]},
      ${this.state.p3[0]} ${this.state.p3[1]},
      ${this.state.p1[0]} ${this.state.p1[1]}`}
      fill={"#"+this.props.palette[this.props.fill]} stroke={"#"+this.props.palette[this.props.stroke]} strokeWidth={this.props.strokeWidth}
      className='triangle' id={this.props.id} onClick={(e)=>this.props.handler(e, this.props.index)} />
    );
  }
}

export default connect(mapStateToProps)(Triangle);
