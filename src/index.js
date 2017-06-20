/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import AddCourseBtn from './components/AddCourseBtn';
import {loadResourceSubjects} from './actions/resourceSubjectActions';

import '../mockups/css/master.scss';


const store = configureStore();
store.dispatch(loadResourceSubjects());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <div>
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>

  <AddCourseBtn/>
  </div>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
