import React, { Component } from 'react';


class InvestmentsComponentM extends Component{
    render() {
        return (
		<div className='InvestmentsM'>

      <h6 className='grid-titles'> Investments  <hr></hr></h6>
      <div className="container">
            <div className="row">
              <div className="col-xs-4 Mob"><div className="square"><div className="content"> Investment 1</div></div></div>
              <div className="col-xs-4 Mob" ><div className="square"><div className="content">Investment 2</div></div></div>
              <div className="col-xs-4 Mob"><div className="square"><div className="content"> Investment 3</div></div></div>
            </div>
      </div>
		</div>
        )
    }
}
export default InvestmentsComponentM;
