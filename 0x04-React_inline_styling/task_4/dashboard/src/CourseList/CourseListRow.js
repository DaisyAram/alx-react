import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";

const styles = StyleSheet.create({
  normal: {
    backgroundColor: "#f5f5f5ab",
  },

  header = {
    backgroundColor: "#deb5b545",
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th {textFirstCell}</th>
            <th style={headerStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
