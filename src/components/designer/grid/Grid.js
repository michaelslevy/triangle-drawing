import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { calculateGrid } from "../../../helpers/calculations"
import Triangle from "../../shapes/Triangle"
import {changeGridCoords} from "../../../actions/settings"


//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    gridCoords:store.settings.gridCoords,
    palette:store.settings.palette
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    changeGridCoords:(gridCoords)=>dispatch(changeGridCoords(gridCoords))
  }
}

class Grid extends Component {

  componentDidMount(){
    const $this=this;
    let gridCoords=calculateGrid(15, this.props.palette[0]);
    this.props.changeGridCoords(gridCoords);

    window.addEventListener("resize", function(){
      gridCoords=calculateGrid(15, $this.props.palette[0]);
      $this.props.changeGridCoords(gridCoords);
    });

  }

  getMicrotime=function(){
    let d = new Date();
    return d.getMilliseconds();
  }

  keyText=(id)=>"grid"+id+"-"+this.getMicrotime();

  handler=function(e, index){
      e.preventDefault();
      e.stopPropagation();
  }

  render() {
     return (
       <div id='grid'>
        <svg width="100%">
        {this.props.gridCoords.map((coord) =>
          <Triangle key={this.keyText(coord.key)} handler={this.handler} index={coord.key} id={this.keyText(coord.key)} side={coord.side} stroke={(coord.color)?"#"+coord.color:"#555"} strokeWidth={1} fill={(coord.color)?"#"+coord.color:"#555"} direction={coord.direction}  x={coord.x} y={coord.y} />
        )}
        </svg>
      </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Grid);
