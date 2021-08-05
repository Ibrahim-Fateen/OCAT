import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import { Login } from './pages/Login/login';
import { Logout } from './pages/Login/login';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  if (localStorage.token != 1) {
    return <SiteWrapper>
      <BrowserRouter>
        <Redirect to='/login' />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </SiteWrapper>;
  }

  return <SiteWrapper>
    <BrowserRouter>
      <Route path="/" component={DashboardBulletin} />
      <Route path="/assessment/new" component={NewAssessment} />
      <Route path="/assessment/list" component={AssessmentList} />
      <Route path="/logout" component={Logout} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  </SiteWrapper>;
};
