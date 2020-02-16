import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Triangle from "./Triangle"
import { connect } from 'react-redux'
import { calculateTriangleAltitude } from "../../helpers/calculations"
import "./index.css"
import {updateGridPaletteIndexMap,changeColorChart,updateDimensions} from "../../actions/settings"

const mapStateToProps = (store) => {
  return {
    width:store.settings.width,
    height:store.settings.height,
    shape:store.settings.shape,
    sideLength:store.settings.sideLength,
    shapeCoords:store.settings.shapeCoords,
    selectedColor:store.settings.selectedColor,
    colorChart:store.settings.colorChart,
    gridCoords:store.settings.gridCoords,
    palette:store.settings.palette,
    translationMap:store.settings.translationMap,
    gridPaletteIndexMap:store.settings.gridPaletteIndexMap
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeColorChart:(colorChart)=>dispatch(changeColorChart(colorChart)),
    updateDimensions:(dimensions)=>dispatch(updateDimensions(dimensions)),
    updateGridPaletteIndexMap:(gridPaletteIndexMap)=>dispatch(updateGridPaletteIndexMap(gridPaletteIndexMap))
  }
}

class Rhombus extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state={
      localMap:[]
    };
  }

  handler=function(e, index){
      e.preventDefault();
      e.stopPropagation();
      let colorChart=this.props.colorChart;
      let i=this.props.selectedColor;
      colorChart[index]=this.props.palette[i];
      this.props.changeColorChart(colorChart);

      let dimensions={
        width:this.props.width,
        height:this.props.height,
        shape:this.props.shape,
      };

     this.props.updateDimensions(dimensions);
     if(typeof this.props.translationMap[index]=="undefined"){return false;}

     let gridPaletteIndexMap=this.props.gridPaletteIndexMap;
     for(let x=0;x<this.props.translationMap[index].length;x++){

       // i=index of selectedColor
       let pos=this.props.translationMap[index][x];
       gridPaletteIndexMap[pos]=i;

       let id="gridTri"+pos;
       let tri=document.getElementById(id);
       if(tri){
         let localMap=this.state.localMap;
         localMap[index]=i;
         this.setState({localMap})
       }

     }
     this.props.updateGridPaletteIndexMap(gridPaletteIndexMap);

  }

  getMicrotime=function(){
    let d = new Date();
    return d.getMilliseconds();
  }

  keyText=(id)=>"rho"+id+"-"+this.getMicrotime();

   render() {
     let svgWidth=this.props.sideLength*this.props.width+(this.props.height/2*this.props.sideLength);
     return (
          <svg id='rhombus' className='svgBuilder' style={{width:svgWidth}}>
          {this.props.shapeCoords.map((coord) =>
            <Triangle key={this.keyText(coord.key)} handler={this.handler} index={coord.key} side={this.props.sideLength} stroke={"#888"} strokeWidth={1} fill={(this.state.localMap[coord.key])?this.state.localMap[coord.key]:0} direction={coord.direction}  x={coord.x} y={coord.y} />
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
export default connect(mapStateToProps,mapDispatchToProps)(Rhombus);
