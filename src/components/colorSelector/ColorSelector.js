import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SelectorBlock from "./SelectorBlock"
import './index.css'

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
        palettes:[],
        loading:true
      };

      this.inputRef = React.createRef();
      this.updateKeyword = this.updateKeyword.bind(this);

    }

    parseColorJson=function(json){
      let data=[];
      for (let i=0; i<json.length; i++){

        let colors=json[i].colors;
        let colorList=[];
        for(let x=0; x<colors.length; x++){
          colorList.push(colors[x]);
        }

        let obj={title:json[i].title, colors:colorList}
        data.push(obj);
      }
      return data;
    }

    getData(keywords=false){
      const self=this;
      const url='http://webventions.com/sandbox/fetch/fetch.php';
      let fullLink=(keywords)?url+"?keywords="+encodeURI(keywords):url;
      self.setState({loading:true});
      fetch(fullLink).then(function(response) {
        return response.json();
      }).then(function(json) {
        let p=self.parseColorJson(json);
        self.setState({palettes:p})
        self.setState({loading:false});
      }).catch(function(err) {
        console.error('Fetch problem: ' + err.message);
      });
  }

  updateKeyword=function(event){
    event.preventDefault();
    event.stopPropagation();

    let keywords=this.inputRef.current.value;
    this.getData(keywords);
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

          <form>
            <input placeholder='enter keywords' type='text'ref={this.inputRef} id='colorSearch' />
            <button id='colorSubmit' onClick={this.updateKeyword} >Explore</button>
          </form>

          <div id='colorList'>

            {(this.state.loading)?<p>loading...</p>:
            this.state.palettes.map((palette, index) =>(
              <SelectorBlock key={index} title={palette.title}  colors={palette.colors} />
            ))}

          </div>
       </div>
     );
  }
}

ColorSelector.propTypes = {

};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector)  ;
