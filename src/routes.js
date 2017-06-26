import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MockupPage from './components/mockups/MockupPage';
import NotFoundPage from './components/NotFoundPage';
import ResourceSubjectsPage from './components/ResourceSubjects/ResourceSubjectsPage';
import CoursePage from './components/addCourses/CoursePage';
import ResourcePage from './components/resources/ResourcePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ResourceSubjectsPage}/>
    <Route path="mockup" component={MockupPage}/>
    <Route path="addcourse" component={CoursePage}/>
    <Route path="resources" component={ResourcePage}/>
    <Route path="resources/:subject" component={ResourcePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
