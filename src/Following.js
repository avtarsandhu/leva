import React, { Component } from 'react';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var following = [
  {
      funds: "btov",
      companies: "Airbnb"
  }, {
      funds: "UBS",
      companies: "Uber"
  },{
      funds: "Redalpine",
      companies: "Hem"
  }
];


class FollowingComponent extends Component{
    render() {
        return (
		<div className='Following'>
              <h6 className='table-titles'> Following <hr></hr></h6>
                <BootstrapTable className="col-xs-12" data={following} striped hover>
                    <TableHeaderColumn isKey dataField='funds'>Funds</TableHeaderColumn>
                    <TableHeaderColumn dataField='companies'>Companies</TableHeaderColumn>
                </BootstrapTable>
		</div>
        )
    }
}
export default FollowingComponent;
