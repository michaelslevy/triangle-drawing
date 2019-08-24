import React, { Component } from 'react';
import PropTypes from 'prop-types';
import diamond from '../../../../diamond.svg'
import rhombus from '../../../../rhombus.svg'
import { connect } from 'react-redux'
import {changeShape, changeWidth, changeHeight} from "../../../../actions/settings"

const mapStateToProps = (store) => {
  return {
    shape:store.settings.shape,
    width:store.settings.width,
    height:store.settings.height
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeShape:(shape)=>dispatch(changeShape(shape)),
    changeWidth:(width)=>dispatch(changeWidth(width)),
    changeHeight:(height)=>dispatch(changeHeight(height)),
  }
}

class Shape extends Component {

  updateShapeHandler=function(e, shape){
    e.preventDefault();
    e.stopPropagation();

    this.props.changeShape(shape);
  }

  updateWidthHandler=function(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.changeWidth(e.target.value);

  }

  updateHeightHandler=function(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.changeHeight(e.target.value);
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
              min='3' max='20'
              value={this.props.width} />
              </label>
              {(this.props.shape==="rhombus")?
                (<label>height
                <input type='number' id='heightInput'
                onChange={(e)=>this.updateHeightHandler(e)}
                min='3' max='20'
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
