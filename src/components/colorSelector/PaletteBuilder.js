import React, { Component } from 'react';
import { connect } from 'react-redux'
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
          <p>Click on color swatches to design the colors in your pattern</p>
          <div id='colorList'>

             <ColorPicker initialColor={(this.props.palette[0])?"#"+this.props.palette[0]:"#ffffff"} />
             <ColorPicker initialColor={(this.props.palette[1])?"#"+this.props.palette[1]:"#ffffff"} />
             <ColorPicker initialColor={(this.props.palette[2])?"#"+this.props.palette[2]:"#ffffff"} />
             <ColorPicker initialColor={(this.props.palette[3])?"#"+this.props.palette[3]:"#ffffff"} />
             <ColorPicker initialColor={(this.props.palette[4])?"#"+this.props.palette[4]:"#ffffff"} />

          </div>
        </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(PaletteBuilder)  ;
