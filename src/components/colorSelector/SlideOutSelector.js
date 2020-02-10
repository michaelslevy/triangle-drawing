import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './index.css'
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {updateSlideOutSelectorOpen} from "../../actions/settings"
import ColorSelector from "./ColorSelector"


const mapStateToProps = (store) => {
  return {
    slideOutSelectorOpen:store.settings.slideOutSelectorOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSlideOutSelectorOpen:(status)=>dispatch(updateSlideOutSelectorOpen(status))
  }
}

class SlideOutSelector extends Component {

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  slideOutHandler=function(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.updateSlideOutSelectorOpen(false);
  }

   render() {

     return (
        <div ref={ref => this.el = ref}>
            <SlidingPane
                closeIcon={<div>Close</div>}
                isOpen={ this.props.slideOutSelectorOpen }
                title='Palette Selector'
                from='left'
                width='50%'
                onRequestClose={ (e) => this.slideOutHandler(e) }>
                <ColorSelector hideNextButton={1} />
            </SlidingPane>
        </div>
     );
  }
}

/*
Designer.propTypes = {
  mode:PropTypes.string
};*/

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(SlideOutSelector);
