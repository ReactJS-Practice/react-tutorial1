import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hasHistory} from "react-router"

import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from './component/Layout';

const app = document.getElementById('content');
//ReactDOM.render(<Layout/>, app);
ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>
, app);