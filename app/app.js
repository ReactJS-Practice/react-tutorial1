import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from "react-router"

//import createHistory from "history/lib/createHistory"

//const hasHistory = createHistory();
//import Bootstrap from "./vendor/bootstrap-without-jquery";

//import Layout from './component/Layout';
import GitApp from './component/githubcard/GitApp';



const app = document.getElementById('content');

ReactDOM.render(<GitApp />, app);
//ReactDOM.render(<GitApp cards={data}/>, app);

/*ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>
, app);*/