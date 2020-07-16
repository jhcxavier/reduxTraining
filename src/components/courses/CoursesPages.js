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
    const { courses, actions, authors } = props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Hello Moto " + error);
      });
    }
    if (authors.length == 0) {
      actions.loadAuthors().catch((error) => {
        alert("Hello Moto " + error);
      });
    }
  }, []);
  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={props.courses} />
    </>
  );
};

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log("state", state.courses);

  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
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
