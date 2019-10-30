import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SelectorBlock from "./SelectorBlock"
import {changePalette, updateOnlineStatus} from "../../actions/settings.js"

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    online:store.settings.online
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    changePalette: (colors) => dispatch(changePalette(colors)),
    updateOnlineStatus: (online) => dispatch(updateOnlineStatus(online))
  }
}

class ColorSearch extends Component {

    constructor(){
      super();
      this.state = {
        palettes:[],
        loading:true
      };

      this.inputRef = React.createRef();
      this.updateKeyword = this.updateKeyword.bind(this);
      this.clickHandler=this.clickHandler.bind(this);
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
        self.props.updateOnlineStatus(false);
        self.setState({loading:false});
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

  clickHandler(colors, e){
    e.preventDefault();
    e.stopPropagation();

    this.props.changePalette(colors);

    let colorBlocksList=document.querySelectorAll(".colorBlocks");
    for(let i=0; i<colorBlocksList.length; i++){
      colorBlocksList[i].classList.remove("active");
    }
    e.target.parentNode.classList.add("active");
  }

   render() {

     return (
       <div id='colorSearch'>
         {(this.props.online)?
          <form>
            <input placeholder='enter keywords' type='text'ref={this.inputRef} id='colorSearchInput' />
            <button id='colorSubmit' onClick={this.updateKeyword} >Explore</button>
          </form>:" "
        }

          <div id='colorList'>

            {(this.state.loading)?<p>loading...</p>:
              (this.props.online)?
                this.state.palettes.filter(palette=>palette.colors.length>0).map((palette, index) =>(
                  <SelectorBlock key={index} title={palette.title} handler={this.clickHandler} colors={palette.colors} />
                )):
                <p>You are offline</p>
              }

          </div>
        </div>
     );
  }
}

ColorSearch.propTypes = {
  palettes:PropTypes.array,
  loading:PropTypes.bool
};

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(ColorSearch)  ;
