import React, { Component } from 'react';


class CirclesComponentM extends Component{
    render() {
        return (
		<div className='CirclesM'>

      <h6 className='grid-titles'> Circles<hr></hr></h6>
      <div className="container">
            <div className="row">
              <div className="col-xs-4 Mob"><div className="square"><div className="content"> Circle 1</div></div></div>
              <div className="col-xs-4 Mob" ><div className="square"><div className="content">Circle 2</div></div></div>
              <div className="col-xs-4 Mob"><div className="square"><div className="content"> Circle 3</div></div></div>
            </div>
      </div>
		</div>
        )
    }
}
export default CirclesComponentM;
