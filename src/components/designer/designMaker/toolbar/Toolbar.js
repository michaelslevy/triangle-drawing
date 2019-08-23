import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shape from "./Shape"
import Palette from "./Palette"

class Toolbar extends Component {
   render() {

     return (
       <div id='toolbar'>
          <Shape />
          <Toolbar />
       </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default Toolbar;
