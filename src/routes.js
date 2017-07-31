import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MockupPage from './components/mockups/MockupPage';
import NotFoundPage from './components/NotFoundPage';
import ResourceSubjectsPage from './components/ResourceSubjects/ResourceSubjectsPage';
import ManageCoursePage from './components/addCourses/ManageCoursePage';
import ResourcePage from './components/resources/ResourcePage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ResourceSubjectsPage}/>
    <Route path="mockup" component={MockupPage}/>
    <Route path="addcourse" component={ManageCoursePage}/>
    <Route path="resources" component={ResourcePage}/>
    <Route path="resources/:subject" component={ResourcePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="register" component={RegisterPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
