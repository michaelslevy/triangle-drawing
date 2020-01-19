import React, { Component } from 'react';
import PropTypes from 'prop-types';
import diamond from '../../../../diamond.svg'
import rhombus from '../../../../rhombus.svg'
import { connect } from 'react-redux'
import {changeShape, updateDimensions, resetColors} from "../../../../actions/settings"

const mapStateToProps = (store) => {
  return {
    shape:store.settings.shape,
    width:store.settings.width,
    height:store.settings.height,
    palette:store.settings.palette
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeShape:(shape)=>dispatch(changeShape(shape)),
    updateDimensions:(dimensions)=>dispatch(updateDimensions(dimensions)),
    resetColors:(color)=>dispatch(resetColors(color))
  }
}

class Shape extends Component {

  componentDidMount(){
   this.props.updateDimensions({
     width:this.props.width,
     height:this.props.height,
     shape:this.props.shape
   });
  }

  updateShapeHandler=function(e, shape){
    e.preventDefault();
    e.stopPropagation();

    let w=(this.props.width)?this.props.width:3;
    let h=(this.props.height)?this.props.height:3;
    let dimensions={
      width:w,
      height:h,
      shape
    };
    this.props.updateDimensions(dimensions);

    let color=this.props.palette[0];
    this.props.resetColors(color);

  }

  updateWidthHandler=function(e){
    e.preventDefault();
    e.stopPropagation();

    let width=Number(e.target.value);
    let dimensions={
      width,
      height:this.props.height,
      shape: this.props.shape
    };
   this.props.updateDimensions(dimensions);

   let color=this.props.palette[0];
   this.props.resetColors(color);
  }

  updateHeightHandler=function(e){
    e.preventDefault();
    e.stopPropagation();

    let height=Number(e.target.value);
    let dimensions={
      width:this.props.width,
      height,
      shape: this.props.shape
    };
    this.props.updateDimensions(dimensions);

    let color=this.props.palette[0];
    this.props.resetColors(color);
  }

   render() {

     return (
       <div id='ShapeSelector'>
          <nav>
            <button
            className={(this.props.shape==="rhombus")?" active ":""}
            onClick={(e)=>this.updateShapeHandler(e,"rhombus")}>
              <img src={rhombus} width='48' />
            </button>

            <button
            className={(this.props.shape==="diamond")?" active ":""}
            onClick={(e)=>this.updateShapeHandler(e,"diamond")}>
              <img src={diamond} width='28' />
            </button>
          </nav>

          <form>
            <label>width
              <input type='number' id='widthInput'
              onChange={(e)=>this.updateWidthHandler(e)}
              min='2' max='20'
              value={this.props.width} />
              </label>
              {(this.props.shape==="rhombus")?
                (<label>height
                <input type='number' id='heightInput'
                onChange={(e)=>this.updateHeightHandler(e)}
                min='2' max='20'
                value={this.props.height} />
              </label>): ""
              }

          </form>

       </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Shape);
