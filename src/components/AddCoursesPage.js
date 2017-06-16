import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../actions/courseActions';
import {bindActionCreators} from 'redux';
import * as categories from '../api/categories';
import * as ratings from '../api/ratings';

class AddCoursesPage extends React.Component{
  constructor (props, context){
    super(props, context);
    this.state={
      course:{category:"React",
              title:"",
              author:"",
              description:"",
              website:"",
              url:"",
              rating:"1",
              comments:""}
    };
    //this.onValueChange=this.onValueChange.bind(this);
    this.onCatChange=this.onCatChange.bind(this);
    this.onTitleChange=this.onTitleChange.bind(this);
    this.onAuthorChange=this.onAuthorChange.bind(this);
    this.onDesChange=this.onDesChange.bind(this);
    this.onWebsiteChange=this.onWebsiteChange.bind(this);
    this.onURLChange=this.onURLChange.bind(this);
    this.onRatingChange=this.onRatingChange.bind(this);
    this.onCommentChange=this.onCommentChange.bind(this);
    this.onClickSave=this.onClickSave.bind(this);
  }
  //onValueChange(event){
    //const course = this.state.course;
    //switch(event.target.name) {
      //case 'cat':{
        //course.category=event.target.value;
        //this.setState({course:course});}
      //case 'title':{
          //course.title=event.target.value;
          //this.setState({course:course});}
      //case 'author':{
              //course.author=event.target.value;
              //this.setState({course:course});}
      //case 'author':{
              //course.description=event.target.value;
              //this.setState({course:course});}
      //case 'website':{
              //course.website=event.target.value;
              //this.setState({course:course});}
      //case 'url':{
              //course.url=event.target.value;
              //this.setState({course:course});}
      //case 'rating':{
                //course.rating=event.target.value;
                //this.setState({course:course});}
      //case 'comment':{
                //course.comment=event.target.value;
                //this.setState({course:course});}
      //}
  //}

  onCatChange(event){
    //debugger;
    const course = this.state.course;
    course.category=event.target.value;
    this.setState({course:course});
  }
  onTitleChange(event){
    const course = this.state.course;
    course.title=event.target.value;
    this.setState({course:course});
  }
  onAuthorChange(event){
    const course = this.state.course;
    course.author=event.target.value;
    this.setState({course:course});
  }
  onDesChange(event){
    const course = this.state.course;
    course.description=event.target.value;
    this.setState({course:course});
  }
  onWebsiteChange(event){
    const course = this.state.course;
    course.website=event.target.value;
    this.setState({course:course});
  }
  onURLChange(event){
    const course = this.state.course;
    course.url=event.target.value;
    this.setState({course:course});
  }
  onRatingChange(event){
    const course = this.state.course;
    course.rating=event.target.value;
    this.setState({course:course});
  }
  onCommentChange(event){
    const course = this.state.course;
    course.comment=event.target.value;
    this.setState({course:course});
  }
  //onValueChange(event){
    //const course = this.state.course;
    //course.description=event.target.value;
    //this.setState({course:course});
  //}

  onClickSave(){
    this.props.actions.createCourse(this.state.course);

  }

  courseRow (course, index){
    return  <div key={index}>
            <p>category: {course.category}</p>
            <p>title :{course.title}</p>
            <p>author :{course.author}</p>
            <p>description :{course.description}</p>
            <p>website :{course.website}</p>
            <p>url :{course.url}</p>
            <p>rating :{course.rating}</p>
            <p>comment :{course.comment}</p>
    </div>

  }

  render(){
    return(
      <div>
      <h1> Add a new course </h1>
                {this.props.courses.map(this.courseRow)}

      <p></p>Categories:
          <select value={this.state.course.category} onChange={this.onCatChange}>
            {categories.items.map((category) =>
                <option value={category.itemName}>{category.itemName}</option>
                )}
          </select>
      <p></p>
      Title :
      <input type="text" name="title"
      onChange={this.onTitleChange}
      value={this.state.course.title}
      />
      <p></p>
      Author :<input type="text" name="author"
      onChange={this.onAuthorChange}
      value={this.state.course.author}
      />
      <p></p>
      Description :<input type="textarea" name="description"
      onChange={this.onDesChange}
      value={this.state.course.description}
      />
      <p></p>
      Website :<input type="text" name="website"
      onChange={this.onWebsiteChange}
      value={this.state.course.website}
      />
      <p></p>
      URL :<input type="text" name="url"
      onChange={this.onURLChange}
      value={this.state.course.url}
      />
      <p></p>
      Rating :
      <select value={this.state.course.rating} onChange={this.onRatingChange}>
        {ratings.items.map((item) =>
            <option value={item.rate}>{item.rate}</option>
            )}
      </select>

     <p></p>
      Comments :<input type="textarea" name="comment"
      onChange={this.onCommentChange}
      value={this.state.course.comment}
      />

      <p></p>
      <input
      type="submit"
      value="Submit"
      onClick = {this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCoursesPage);
