import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
// import courseReducer from "../../redux/reducers/courseReducer";

const CoursesPage = (props) => {
  // componentDidMount() {
  //   this.props.actions.loadCourses().catch((error) => {
  //     debugger;
  //     alert("Loading Courses Failed" + error);
  //   });
  // }
  useEffect(() => {
    props.actions.loadCourses().catch((error) => {
      alert("Loading Courses Failed " + error);
    });
  });
  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={props.courses} />

      {props.courses &&
        props.courses.map((course, index) => (
          <div key={index}>{course.title}</div>
        ))}
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log("state", state.courses);
  debugger;
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
