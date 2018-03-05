import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Job from './components/job.js';
import Task from './components/task/task.js';
import TaskDetail from './components/task/taskDetail.js';
import Deploy from './components/deploy.js';
import Model from './components/model.js';
// import Detail from './components/task/detail';


function RouterConfig({ history }) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={ IndexPage } />
        <Route path="/job" component={ IndexPage } />
        <Route path="/task" component={ Task } />
        <Route path="/task-map" component={ TaskDetail } />
        <Route path="/deploy" component={ Deploy } />
        <Route path="/model" component={ Model } />
        {/* <Redirect to="/" /> */}
      </Switch>
    </HashRouter>
  );
}
export default RouterConfig;

// export default ({ history })=>{
//   return (

//   )
// }

