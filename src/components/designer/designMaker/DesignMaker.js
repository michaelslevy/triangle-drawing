import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import Toolbar from "./toolbar/Toolbar"
import DesignControl from "./designControl/DesignControl"


class DesignMaker extends Component {
   render() {

     return (
       <div id='designePane'>
          <Toolbar />
          <DesignControl />
       </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default DesignMaker;
