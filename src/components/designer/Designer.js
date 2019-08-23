import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import DesignMaker from './designMaker/DesignMaker';
import Grid from './grid/Grid';

class Designer extends Component {
   render() {

     return (
       <div id='designer'>
        <DesignMaker />
        <Grid />
       </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default Designer;
