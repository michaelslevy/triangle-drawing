import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SelectorBlock from "./SelectorBlock"
import {changePalette} from "../../actions/settings.js"

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

    constructor(){
      super();
      this.state = {
        palettes:[],
        loading:true
      };

      this.clickHandler=this.clickHandler.bind(this);
    }

  componentDidMount(){

  }

  clickHandler(colors, e){
    e.preventDefault();
    e.stopPropagation();

    /*this.props.changePalette(colors);

    let colorBlocksList=document.querySelectorAll(".colorBlocks");
    for(let i=0; i<colorBlocksList.length; i++){
      colorBlocksList[i].classList.remove("active");
    }
    e.target.parentNode.classList.add("active");*/
  }

   render() {

     return (
       <div id='paletteBuilder'>
          <h1>Palette Builder</h1>
          <div id='colorList'>



          </div>
        </div>
     );
  }
}

PaletteBuilder.propTypes = {

};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(PaletteBuilder)  ;
