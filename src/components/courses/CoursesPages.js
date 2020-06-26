import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
// import courseReducer from "../../redux/reducers/courseReducer";

const CoursesPage = (props) => {
  // componentDidMount() {
  //   this.props.actions.loadCourses().catch((error) => {

  //     alert("Loading Courses Failed" + error);
  //   });
  // }
  useEffect(() => {
    props.actions.loadCourses().catch((error) => {
      alert("Hello Moto " + error);
    });
    props.actions.loadAuthors().catch((error) => {
      alert("Hello Moto " + error);
    });
  }, []);
  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={props.courses} />
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log("state", state.courses);

  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
