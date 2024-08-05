import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import {StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create ({
  bodySectionWithMargin: {
    margin-bottom: 40px;
 },
});

class bodySectionWithMarginBottom extends Component {
  renders() {
    return (
      <div className={css(styles.BodySectionWithMarginBottom)}	    
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
