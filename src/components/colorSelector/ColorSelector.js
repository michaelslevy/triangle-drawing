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

class ColorSelector extends Component {

    constructor(){
      super();
      this.state = {
        palettes:{}
      };
    }

    getData(){

      const url='http://webventions.com/sandbox/fetch/fetch.php';
      fetch(url).then(function(response) {
      console.log(response);
        return response.json();
      }).then(function(json) {
        console.log(json);
        this.setState({palettes:json})
      }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
  }

  componentDidMount(){
    this.getData();
  }

   render() {

     return (
       <div id='colorSelector'>
          <h1>Palette Selector</h1>
          <nav>
            <button>Popular</button>
            <button>Builder</button>
          </nav>

          <div id='colorList'>
            <ul>
            {/*this.state.palettes.map((palette) =>(<li>{palette.title}</li>))*/ }
            </ul>
          </div>
       </div>
     );
  }
}

ColorSelector.propTypes = {

};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector)  ;
