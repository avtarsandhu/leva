import React, { Component } from 'react';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var circles = [
  {
      circleName: "Boys from the Hood",
      members: 5,
      investmentsMade: 2
  }, {
      circleName: "UBS",
      members: 150,
      investmentsMade: 25
  },{
      circleName: "Family",
      members: 3,
      investmentsMade: 0
  }
];


class CirclesComponent extends Component{
    render() {
        return (
		<div className='Circles'>
              <h6 className='table-titles'> Circles <hr></hr></h6>
                <BootstrapTable className="col-xs-12" data={circles} striped hover>
                    <TableHeaderColumn isKey dataField='circleName'>Circle Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='members'># Members</TableHeaderColumn>
                    <TableHeaderColumn dataField='investmentsMade'>Investments Made</TableHeaderColumn>
                </BootstrapTable>
		</div>
        )
    }
}
export default CirclesComponent;
