import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Diamond from "../../../shapes/Diamond"
import Rhombus from "../../../shapes/Rhombus"

const mapStateToProps = (store) => {
  return {
    width:store.settings.width,
    shape:store.settings.shape
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
        {(this.props.shape==="rhombus")?<Rhombus />:<Diamond />}
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
