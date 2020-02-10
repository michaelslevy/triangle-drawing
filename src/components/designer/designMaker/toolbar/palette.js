import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {changeSelectedColor, resetColors, updateSlideOutSelectorOpen} from "../../../../actions/settings"

const mapStateToProps = (store) => {
  return {
    palette:store.settings.palette,
    SlideOutSelectorOpen:store.settings.SlideOutSelectorOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedColor:(color)=>dispatch(changeSelectedColor(color)),
    resetColors:(color)=>dispatch(resetColors(color)),
    updateSlideOutSelectorOpen:(status)=>dispatch(updateSlideOutSelectorOpen(status))
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
    this.props.changeSelectedColor(0)
  }

  selectColor=function(i, color){
    this.setState({selectedColorSquare:i});
    this.props.changeSelectedColor(i);
  }

  resetHandler=function(e){
    e.preventDefault();
    e.stopPropagation();
    let color=this.props.palette[0];
    this.props.resetColors(0);
  }

  slideOutHandler=function(e){
    e.preventDefault();
    e.stopPropagation();
    let status=(this.props.SlideOutSelectorOpen)?false:true;
    this.props.updateSlideOutSelectorOpen(status);
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
            <button onClick={(e)=>this.resetHandler(e)} className='textButton' id='resetPalette'>Reset<br/>Colors</button>
            <button onClick={(e)=>this.slideOutHandler(e)} className='textButton' id='modifyPalette'>Modify<br/>Palette</button>

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
