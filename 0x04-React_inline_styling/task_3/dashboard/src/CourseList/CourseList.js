import React from "react";
import {StyleSheet, css} from "aphrodite";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

const styles = StyleSheet.create({
  table: {
    margin-top: 2em;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 1.2rem;
    margin-bottom: 15em;
    margin-left: auto;
    margin-right: auto;	  
  },

  th: {
    border-bottom: 1px solid #ddd;
    width: 80%;
  },

  td: {
    width: 80%;
  },

  tr: {
     "nth-child(2)": {
       text-align: left;
     },
  },
});

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
