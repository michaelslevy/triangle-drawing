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
    shapeCoords:store.settings.shapeCoords,
    selectedColor:store.settings.selectedColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class Diamond extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  getMicrotime=function(){
    let d = new Date();
    return d.getMilliseconds();
  }

  handler=function(e, id){
      e.preventDefault();
      e.stopPropagation();
      let tri=document.getElementById(id);
      tri.style.fill=this.props.selectedColor;
  }

  keyText=(id)=>"tri"+id+"-"+this.getMicrotime();

   render() {
     return (
          <svg id='diamond' className='svgBuilder' style={{width:(this.props.sideLength*this.props.width)}}>
          {this.props.shapeCoords.map((coord) =>
            <Triangle key={this.keyText(coord.key)} handler={this.handler} id={"tri"+coord.key} side={this.props.sideLength} stroke='#888' strokeWidth={1} fill={'#555'} direction={coord.direction}  x={coord.x} y={coord.y} />
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
