import React, {Component} from 'react';
var pjson = require('../package.json');

{/* pjson.userName username for display in title bar and side bar   */}


class NavigationComponent extends Component {
  render() {
    return (<div className='Navigation'>

      <p className="app-header">
        <a href="#" className="dropdown-toggle darkGray" data-toggle="dropdown">{pjson.userName}
          <b className="caret"></b>
        </a>
      </p>

      <header className="col-sm-4 app-sidebar">
        <h3 className="App-title">Leva</h3>
        <br></br>
        <br></br>
        <p className='darkGray'>
          Welcome,<br></br>
        </p>
        <p>{pjson.userName}</p>

        <ul className="sidebar-nav list-unstyled">
          <li>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <a href="#">Overview</a>
          </li>
          <li>
            <i className="fa fa-cog" aria-hidden="true"></i>
            <a href="#">Settings</a>
          </li>
          <li>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </header>

    </div>)
  }
}
export default NavigationComponent;
