import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Diamond from "../../../shapes/Diamond"

const mapStateToProps = (store) => {
  return {
    width:store.settings.width,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class DesignControl extends Component {
   render() {

     return (
       <div id='designControl'>
          Design Control
          <Diamond />
       </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps,mapDispatchToProps)(DesignControl);
