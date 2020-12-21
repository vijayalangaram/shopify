import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";

import Shopifyscrppage from '../Shopifyscrppage';
import Shopifyscanpagesecon from '../Shopifyscanpagesecon';
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
                    <Route path="/Shopifyscrppagepopup" component={Shopifyscrppagepopup} />
                    <Route path="/ShopifyscrppageBlackicon" component={ShopifyscrppageBlackicon} />
                    <Route path="/Shopifyscanpagesecon" component={Shopifyscanpagesecon} />
                </Switch>
            </Router>
        )
    }
}