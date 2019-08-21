import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

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

class Grid extends Component {
   render() {

     return (
       <div id='grid'>
        <h1>Grid</h1>
      </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Grid);
