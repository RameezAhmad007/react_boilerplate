import React from "react";
import PropTypes from "prop-types";
import { MdMenu } from "react-icons/md";
import "./styles.scss";

function Header(props) {
  const { expandMenu, setExpandMenu } = props;
  return (
    <header
      className={`header_container ${
        expandMenu ? "header_container_expand" : ""
      }`}
    >
      <div className="header_logo_container">
        <MdMenu
          className="header_menu_icon"
          onClick={() => setExpandMenu(!expandMenu)}
        />
        <p className="header_logo">Logo</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  expandMenu: PropTypes.bool,
  setExpandMenu: PropTypes.func,
};

export default Header;
