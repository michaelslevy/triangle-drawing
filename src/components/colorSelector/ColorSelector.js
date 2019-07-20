import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SelectorBlock from "./SelectorBlock"
import './index.css'
import ColorSearch from "./ColorSearch"

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

   render() {

     return (
       <div id='colorSelector'>
          <h1>Palette Selector</h1>
          <nav>
            <button>Popular</button>
            <button>Builder</button>
          </nav>

          <ColorSearch />
       </div>
     );
  }
}

ColorSelector.propTypes = {

};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector)  ;
