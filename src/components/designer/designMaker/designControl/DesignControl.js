import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Triangle from "../../../shapes/Triangle"

class DesignControl extends Component {
   render() {

     return (
       <div id='designControl'>
          Design Control
          <svg>
            <Triangle side={150}  fill={'#555'} />
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
