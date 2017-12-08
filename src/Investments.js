import React, {Component} from 'react';
var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var products = [
  {
    company: "Hyperloop",
    investment: "US$ 150'000",
    shares: 1500,
    value: "US$ 250'000",
    pchange: "+66%"
  }, {
    company: "Airbnb",
    investment: "US$ 50'000",
    shares: 5000,
    value: "US$ 400'000",
    pchange: "+700%"

  }, {
    company: "Hem",
    investment: "US$ 50'000",
    shares: 10000,
    value: "US$ 5000",
    pchange: "-90%"
  }, {
    company: "Portfolio",
    investment: "US$ 270'000",
    shares: '',
    value: "US$ 655'000",
    pchange: "+142%"
  }
];

class InvestmentsComponent extends Component {
  render() {
    return (<div className='Investments'>
      <h6 className='table-titles'>
        Investments Transactions
        <hr></hr>
      </h6>
      <BootstrapTable className="col-md-4" data={products} striped="striped" hover="hover">
        <TableHeaderColumn isKey="isKey" dataField='company'>Company</TableHeaderColumn>
        <TableHeaderColumn dataField='investment'>Investment</TableHeaderColumn>
        <TableHeaderColumn dataField='shares'>Shares</TableHeaderColumn>
        <TableHeaderColumn dataField='value'>Value (as of today)</TableHeaderColumn>
        <TableHeaderColumn dataField='pchange'>% Change</TableHeaderColumn>
      </BootstrapTable>
    </div>)
  }
}
export default InvestmentsComponent;
