import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Triangle from "./Triangle"
import { connect } from 'react-redux'
import { calculateTriangleAltittude } from "../../helpers/calculations"
import "./index.css"

const mapStateToProps = (store) => {
  return {
    width:store.settings.width,
    sideLength:store.settings.sideLength,
    shapeCoords:store.settings.shapeCoords
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class Diamond extends Component {

   render() {
     return (
          <svg id='diamond' className='svgBuilder' style={{width:500}}>
          {this.props.shapeCoords.map((coord) =>
            <Triangle key={"triangle"+coord.key} id={"triangle"+coord.key} side={this.props.sideLength}  fill={'#555'} direction={coord.direction}  x={coord.x} y={coord.y} />
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
