import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import ReviewSystemHOC from './components/reviewSystem/ReviewSystemHOC';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="review-system" component={ReviewSystemHOC}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
