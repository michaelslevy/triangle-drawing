import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './index.css'
import ColorSearch from "./ColorSearch"
import PaletteBuilder from "./PaletteBuilder"
import {changePage} from "../../actions/settings"

const mapStateToProps = (store) => {
  return {
    palette:store.settings.palette
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage:(page)=>dispatch(changePage(page))
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

    e.target.classList.add("active");
  }

  nextPage=function(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.changePage("Designer");
  }

   render() {
      let palette=this.props.palette;

      let nextBTN=(!this.props.hideNextButton)?
      <button id='nextPage'
      disabled={(palette.join("")!=="ffffffffffffffffffffffffffffff")? "": " disabled "}
      onClick={(e)=>this.nextPage(e)}
      className={
        (palette.join("")!=="ffffffffffffffffffffffffffffff")? "ready": ""
      }
      >Next ▸</button>
    : <span></span>

       return (
       <div id='colorSelector'>
         <header id='titleHeader'>
            <h1>Palette Selector</h1>
           <div id='pageIndicators'>
              {nextBTN}
          </div>
        </header>

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
  mode:PropTypes.string
};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);
