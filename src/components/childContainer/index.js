import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function ChildContainer(props) {
  const { children, expandMenu } = props;
  return (
    <div
      className={`container_child_container ${
        expandMenu ? "container_child_container_expand" : ""
      }`}
    >
      {children}
    </div>
  );
}
ChildContainer.propTypes = {
  expandMenu: PropTypes.bool,
  children: PropTypes.element,
};
export default ChildContainer;
