import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './index.css'
import Steps from "../steps/Steps"
import diamond from '../../diamond.svg'
import rhombus from '../../rhombus.svg'

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

class PhraseSelector extends Component {
   render() {
     return (
       <div id='PhraseSelector'>
       <header id='titleHeader'>
          <h1>Choose your repeat unit</h1>
         <div id='pageIndicators'>
            <nav id='steps'>
              <Steps num={1} name='Choose your palette' active={0} completed={1} />
              <Steps num={2} name='Choose your repeat unit' active={1} completed={0} />
              <Steps num={3} name='Design your pattern' active={0} completed={0} />
            </nav>
            <button id='nextPage' onClick={(e)=>this.nextPage(e)}
            className={
              (1===2)? "ready": ""
            } >Next ▸</button>
        </div>
      </header>

        <nav id='shapePicker'>
          <button><img src={rhombus} width='75' /></button>
          <button><img src={diamond} width='43' /></button>
        </nav>

       </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(PhraseSelector);
