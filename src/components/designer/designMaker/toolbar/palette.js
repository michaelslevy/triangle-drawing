import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


const mapStateToProps = (store) => {
  return {
    palette:store.settings.palette
  }
}

class Palette extends Component {
   render() {

     return (
       <div id='palettePicker'>
          <div className='colorPicker'>
            <div className="colorBlock" style={{background:"#"+this.props.palette[0]}}></div>
            <div className="colorBlock" style={{background:"#"+this.props.palette[1]}}></div>
            <div className="colorBlock" style={{background:"#"+this.props.palette[2]}}></div>
            <div className="colorBlock" style={{background:"#"+this.props.palette[3]}}></div>
            <div className="colorBlock" style={{background:"#"+this.props.palette[4]}}></div>
          </div>
       </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps)(Palette);
