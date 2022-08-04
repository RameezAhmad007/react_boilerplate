import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function SideMenu(props) {
  const { expandMenu } = props;
  return (
    <aside
      className={`side_menu_container ${
        expandMenu ? "side_menu_container_expand" : ""
      }`}
    >
      SideMenu
    </aside>
  );
}
SideMenu.propTypes = {
  expandMenu: PropTypes.bool,
};
export default SideMenu;
