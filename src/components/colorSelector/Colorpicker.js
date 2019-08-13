/* https://casesandberg.github.io/react-color */
import React from 'react'
import { PhotoshopPicker  } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    swatchColor: this.props.initialColor
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ swatchColor: color.hex });
  };

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }

    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    return (
      <span>
        <button onClick={ this.handleClick } style={{"background":this.state.swatchColor}} className='colorBlock'></button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <PhotoshopPicker  color={ this.state.swatchColor } onChange={this.handleChange}  header="Select a color" />
        </div> : null }
      </span>
    )
  }
}

export default ColorPicker;
