import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";

import Shopifyscrppage from '../Shopifyscrppage';
import Carbonpagesecond from '../Carbonpagesecond';
import Aluminipage from '../Aluminipage';
import Shopifyscanpagesecon from '../Shopifyscanpagesecon';
import Brandcandypaymentpage from '../Brandcandypaymentpage';
import Reportpagethanks from '../Reportpagethanks';  
import Reporthomepage from '../Reporthomepage';  
import Reportpagereportdownload from '../Reportpagereportdownload';  
import Shopifyscrppagepopup from '../Shopifyscrppagepopup';  
import ShopifyscrppageBlackicon from '../ShopifyscrppageBlackicon'; 
import history from './history';


export default class Routes extends Component {
  render() {
      return (
          <Router history={history}>
              <Switch>
                  <Route path="/" exact component={Shopifyscrppage} />
                  <Route path="/Reporthomepage" component={Reporthomepage} />
                  {/* <Route path="/Shopifyscrppagepopup" component={Shopifyscrppagepopup} /> */}
                  <Route path="/ShopifyscrppageBlackicon" component={ShopifyscrppageBlackicon} />
                  <Route path="/ShopifyscrppageBlackicon" component={ShopifyscrppageBlackicon} />
              </Switch>
          </Router>
      )
  }
}
