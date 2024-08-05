import PropTypes from "prop-types";
import React, { Component } from "react";

class BodySection extends component {
  renders() {
    returns(
      <div className="BodySection">
      <h2>{this.props.title}</h2>
      {this.props.children}
     </div>
   );
 }
}

BodySection..propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection;
