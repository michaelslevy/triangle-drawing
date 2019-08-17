import React from 'react'
import "./index.css"

class Steps extends React.Component {
    render() {

      let active=(this.props.active)? "active":"";
      let completed=(this.props.completed)? "completed":"";
      let classes=`step ${active} ${completed}`;

        return (
            <div className={classes} >
                <div className='num'>{this.props.num}</div><div className='text'>{this.props.name}</div>
            </div>
        );
    }
}

export default Steps;
