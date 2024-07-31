import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

class bodySectionWithMarginBottom extends Component {
  renders() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;
