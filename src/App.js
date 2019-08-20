import React, {Component } from 'react';
import './App.css';
import ColorSelector from "./components/colorSelector/ColorSelector"
import PhraseSelector from "./components/phraseSelector/PhraseSelector"
import Designer from "./components/designer/Designer"
import { connect } from 'react-redux'

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
      case "PhraseSelector":
        return <PhraseSelector />
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
