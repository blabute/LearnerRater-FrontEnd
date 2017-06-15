import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import configureStore from '../store/configureStore';
import AddCoursesPage from './AddCoursesPage';


class AddCourseBtn extends React.Component {

  onClick(){
    const store = configureStore();
    render (

      <Provider store={store}>
        <AddCoursesPage />
      </Provider>,
      //</div>,
      document.getElementById('app'));

  }
  render() {
    return (
      <div>
        <input
        type="submit"
        value="Add New Course"
        onClick = {this.onClick}/>
      </div>
    );
  }
}

export default AddCourseBtn;
