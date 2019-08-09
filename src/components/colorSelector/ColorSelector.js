import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './index.css'
import ColorSearch from "./ColorSearch"
import PaletteBuilder from "./PaletteBuilder"

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {

  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class ColorSelector extends Component {

  constructor(){
    super();
    this.state={
        mode:"search"
    }
  }

  navHandler(e, mode){
    e.preventDefault();
    e.stopPropagation();

    this.setState({mode});
  }

   render() {

     return (
       <div id='colorSelector'>
          <h1>Palette Selector</h1>
          <nav className="tabs">
            <button id='popularPalettes' onClick={(e)=>{this.navHandler(e,"search")}} className='active'>Popular</button>
            <button id='customPalette' onClick={(e)=>{this.navHandler(e,"builder")}}>Builder</button>
          </nav>
          {(this.state.mode==="search")?(<ColorSearch />):(<PaletteBuilder />)}
       </div>
     );
  }
}

ColorSelector.propTypes = {

};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector)  ;
