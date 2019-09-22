import React, {Component } from 'react';
import './App.css';
import ColorSelector from "./components/colorSelector/ColorSelector"
import Designer from "./components/designer/Designer"
import { connect } from 'react-redux'
import reducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Note: this API requires redux@>=3.1.0
const store = createStore(reducer, applyMiddleware(thunk));

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    page:store.settings.page
  }
}

class App extends Component {

  selectPage=function(){
    switch(this.props.page){
      case "ColorSelector":
        return <ColorSelector />
      default:
        return <Designer />
      }

    }

    render(){
      return (
        <div className="App">{this.selectPage()}</div>
      );
    }

}

export default connect(mapStateToProps)(App);
