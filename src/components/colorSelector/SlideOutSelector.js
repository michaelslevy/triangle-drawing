import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';


class SlideOutSelector extends Component {

  constructor(props) {
       super(props);
       this.state = {
           isPaneOpenLeft: false
       };
   }

   componentDidMount() {
       Modal.setAppElement(this.el);
   }


   render() {

     return (
        <div id='slideOutSelector'>
          <div ref={ref => this.el = ref}>
            <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                Click me to open left pane with 20% width!
            </button>
          </div>
            <SlidingPane
                closeIcon={<div>Some div containing custom close icon.</div>}
                isOpen={ this.state.isPaneOpenLeft }
                title='Hey, it is optional pane title.  I can be React component too.'
                from='left'
                width='50%'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div>And I am pane content on left.</div>
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
export default SlideOutSelector;
