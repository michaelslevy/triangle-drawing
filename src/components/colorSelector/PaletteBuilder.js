import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SelectorBlock from "./SelectorBlock"
import {changePalette} from "../../actions/settings"

import  ColorPicker  from './ColorPicker';

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    palette:store.settings.palette
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    changePalette: (colors) => dispatch(changePalette(colors))
  }
}

class PaletteBuilder extends Component {

   render() {

     return (
       <div id='paletteBuilder'>
          <h1>Palette Builder</h1>
          <div id='colorList'>

             <ColorPicker  />

          </div>
        </div>
     );
  }
}

PaletteBuilder.propTypes = {

};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(PaletteBuilder)  ;
