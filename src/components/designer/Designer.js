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

class Designer extends Component {
   render() {

     return (
       <h1>Designer</h1>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Designer);
