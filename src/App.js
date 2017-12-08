import React, {Component} from 'react';
import NavigationComponent from './Navigation'
import InvestmentsComponent from './Investments'
import InvestmentsComponentM from './InvestmentsM'
import CirclesComponent from './Circles'
import CirclesComponentM from './CirclesM'
import FollowingComponent from './Following'
import FollowingComponentM from './FollowingM'
import './App.css';

{/*
  Components
  NavigationComponent :  User Top Bar and Navigation Side Bar
  InvestmentsComponent/ InvestmentsComponentM : Investments List / Grid
  CirclesComponent / CirclesComponentM : Circles List / Grid

  mobile component 0-767 pixels

*/}

class App extends Component {
  render() {
    return (<div className="App">

      <NavigationComponent/>

      <div className="container profile hidden-xs">
        <div className="row"><InvestmentsComponent/></div>
        <div className="row"><CirclesComponent/></div>
        <div className="row"><FollowingComponent/></div>
      </div>

      <div className="container profileM visible-xs">
        <div className="row"><InvestmentsComponentM/></div>
        <div className="row"><CirclesComponentM/></div>
        <div className="row"><FollowingComponentM/></div>
      </div>

    </div>);
  }
}

export default App;
