import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import '../../index.css'

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
       <div>
       <h1>Phrase Selector</h1>
       <p>Choose your design unit</p>
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
