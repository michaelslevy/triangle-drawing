import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Triangle from "./Triangle"
import { connect } from 'react-redux'
import { calculateTriangleAltittude } from "../../helpers/calculations"
import "./index.css"
import {colorGridDiamond,changeColorChart,updateDimensions} from "../../actions/settings"

const mapStateToProps = (store) => {
  return {
    width:store.settings.width,
    sideLength:store.settings.sideLength,
    shapeCoords:store.settings.shapeCoords,
    selectedColor:store.settings.selectedColor,
    colorChart:store.settings.colorChart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeColorChart:(colorChart)=>dispatch(changeColorChart(colorChart)),
    updateDimensions:(dimensions)=>dispatch(updateDimensions(dimensions)),
    colorGridDiamond:(colorChart, dimensions)=>dispatch(colorGridDiamond(colorChart, dimensions))
  }
}

class Diamond extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler=function(e, index){
      e.preventDefault();
      e.stopPropagation();
      let colorChart=this.props.colorChart;
      colorChart[index]=this.props.selectedColor;
      this.props.changeColorChart(colorChart);

      let dimensions={
        width:this.props.width,
        height:0
      };
     this.props.updateDimensions(dimensions);
     this.props.colorGridDiamond(colorChart, dimensions);

  }

  getMicrotime=function(){
    let d = new Date();
    return d.getMilliseconds();
  }

  keyText=(id)=>"tri"+id+"-"+this.getMicrotime();

   render() {
     return (
          <svg id='diamond' className='svgBuilder' style={{width:(this.props.sideLength*this.props.width)}}>
          {this.props.shapeCoords.map((coord) =>
            <Triangle key={this.keyText(coord.key)} handler={this.handler} index={coord.key} side={this.props.sideLength} stroke='#888' strokeWidth={1} fill={(this.props.colorChart[coord.key])?"#"+this.props.colorChart[coord.key]:"#555"} direction={coord.direction}  x={coord.x} y={coord.y} />
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
