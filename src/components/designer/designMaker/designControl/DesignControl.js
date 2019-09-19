import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Triangle from "../../../shapes/Triangle"

class DesignControl extends Component {
   render() {

     return (
       <div id='designControl'>
          Design Control
          <svg>
            <Triangle side={50}  fill={'#555'} direction="up"  x={0} y={0} />
            <Triangle side={50}  fill={'#999'} direction="down" x={25} y={0} />
            <Triangle side={50}  fill={'#999'} direction="down"  x={0} y={50} />
            <Triangle side={50}  fill={'#555'} direction="up" x={25} y={50} />
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
export default DesignControl;
