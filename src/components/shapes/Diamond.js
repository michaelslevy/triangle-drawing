import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Triangle from "./Triangle"
import { connect } from 'react-redux'
import { calculateTriangleAltittude } from "../../helpers/calculations"

const mapStateToProps = (store) => {
  return {
    width:store.settings.width,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class Diamond extends Component {

  diamondWidth=0;
  rowHeight=0;

  constructor(){
    super();
    this.state={
      side:50,
      coords:[]
    }
  }

  componentDidMount(){
    this.diamondPhysicalWidth=this.props.width*this.state.side;
    this.rowHeight=calculateTriangleAltittude(this.state.side);
    this.defineTriangleCoordinates();
  }

  //calculate triangle positions
  //rows start with 1
  //each row ads a Triangle
  //first trinagle is center minus half distance
  //start points of proceeding rows add a 50% X distance and 100% Y distance
  defineTriangleCoordinates(){
    let xIncrement=this.state.side/2;
    let startX=this.diamondPhysicalWidth/2;
    let startY=0;
    let coords=[];
    for(let rowCount=1;rowCount<this.props.width+1; rowCount++){
      startX=startX-xIncrement;
      for(let x=0; x<rowCount; x++ ){
        coords.push(
          {
            x:(startX+(this.state.side*x)),
            y:startY
          })
      }
      startY+=this.rowHeight;
    }
    this.setState({coords});

  }

   render() {
     return (
          <svg>
          {this.state.coords.map((coord) =>
            <Triangle side={this.state.side}  fill={'#555'} direction="up"  x={coord.x} y={coord.y} />
          )}
          </svg>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps,mapDispatchToProps)(Diamond);
