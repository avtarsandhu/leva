import React, { Component } from 'react';


class FollowingComponentM extends Component{
    render() {
        return (
		<div className='FollowingM'>

      <h6 className='grid-titles'> Following<hr></hr></h6>
      <div className="container">
            <div className="row">
              <div className="col-xs-4 Mob"><div className="square"><div className="content"> Fund 1</div></div></div>
              <div className="col-xs-4 Mob" ><div className="square"><div className="content">Company 1</div></div></div>
              <div className="col-xs-4 Mob"><div className="square"><div className="content"> Fund 2</div></div></div>
            </div>
      </div>
		</div>
        )
    }
}
export default FollowingComponentM;
