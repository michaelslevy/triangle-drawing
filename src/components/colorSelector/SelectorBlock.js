import React from 'react';

function SelectorBlock(props) {
  return  <div className='selectorBlock'>
      <div className='colorBlocks'>
        {props.colors.map((color, index)=>(
          <div className="colorBlock" key={index} style={{background:"#"+color}}></div>
        ))}
      </div>
      <h4>{props.title}</h4>
  </div>
}

export default SelectorBlock;
