import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './index.css'
import ColorSearch from "./ColorSearch"
import PaletteBuilder from "./PaletteBuilder"
import Steps from "../steps/Steps"
import {changePage} from "../../actions/settings"


//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    palette:store.settings.palette
  }
}

//function passed to Reduxes Connect to dispatch to props
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

    this.props.changePage("PhraseSelector");
  }

   render() {
       return (
       <div id='colorSelector'>
         <header id='titleHeader'>
            <h1>Palette Selector</h1>
           <div id='pageIndicators'>
              <nav id='steps'>
                <Steps num={1} name='Choose your palette' active={1} completed={0} />
                <Steps num={2} name='Choose your phrase' active={0} completed={0} />
                <Steps num={3} name='Design your pattern' active={0} completed={0} />
              </nav>
              <button id='nextPage' onClick={(e)=>this.nextPage(e)}
              className={
                (this.props.palette.join("")!=="ffffffffffffffffffffffffffffff")? "ready": ""
              } >Next ▸</button>
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
