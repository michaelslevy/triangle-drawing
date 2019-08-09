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

    this.navHandler=this.navHandler.bind(this);
  }

  navHandler(mode,e){
    e.preventDefault();
    e.stopPropagation();

    this.setState({mode});
    let buttons=document.querySelectorAll("#colorSelector .tabs button");
      for(let i=0; i<buttons.length; i++){
         buttons[i].classList.remove("active");
    }

    console.log(e.target.classList);
    e.target.classList.add("active");
  }

   render() {

     return (
       <div id='colorSelector'>
          <h1>Palette Selector</h1>
          <nav className="tabs">
            <button id='popularPalettes' onClick={(e)=>this.navHandler("search",e)} className='active'>Popular</button>
            <button id='customPalette' onClick={(e)=>this.navHandler("builder",e)}>Builder</button>
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
