import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {changeSelectedColor} from "../../../../actions/settings"


const mapStateToProps = (store) => {
  return {
    palette:store.settings.palette
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedColor:(color)=>dispatch(changeSelectedColor(color)),
  }
}

class Palette extends Component {

  constructor(){
    super();
    this.state={
      selectedColorSquare:0
    }
  }

  componentDidMount(){
    this.props.changeSelectedColor(this.props.palette[0])
  }

  selectColor=function(i, color){
    this.setState({selectedColorSquare:i});
    this.props.changeSelectedColor(color);
  }

   render() {

     return (
       <div id='palettePicker'>
          <div className='colorPicker'>
            <div
            className={(this.state.selectedColorSquare===0)?"colorBlock active":'colorBlock'}
            style={{background:"#"+this.props.palette[0]}}
            onClick={(e)=>this.selectColor(0,this.props.palette[0])}
            >
            </div>
            <div
            style={{background:"#"+this.props.palette[1]}}
            className={(this.state.selectedColorSquare===1)?"colorBlock active":'colorBlock'}
            onClick={(e)=>this.selectColor(1,this.props.palette[1])}
            ></div>
            <div  style={{background:"#"+this.props.palette[2]}}
            className={(this.state.selectedColorSquare===2)?"colorBlock active":'colorBlock'}
            onClick={(e)=>this.selectColor(2,this.props.palette[2])}
            ></div>
            <div style={{background:"#"+this.props.palette[3]}}
            className={(this.state.selectedColorSquare===3)?"colorBlock active":'colorBlock'}
            onClick={(e)=>this.selectColor(3,this.props.palette[3])}
            ></div>
            <div  style={{background:"#"+this.props.palette[4]}}
            className={(this.state.selectedColorSquare===4)?"colorBlock active":'colorBlock'}
            onClick={(e)=>this.selectColor(4,this.props.palette[4])}
            ></div>
            <button id='modifyPalette'>Modify<br/>Palette</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(Palette);
