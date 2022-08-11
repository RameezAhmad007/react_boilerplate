import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavList from "./navList";
import logo from "../../assets/images/carrymelogo.png";
import "./styles.scss";

function SideMenu(props) {
  const { expandMenu } = props;
  return (
    <aside
      className={`side_menu_container ${
        expandMenu ? "side_menu_container_expand" : ""
      }`}>
      <Link to="/" className="side_menu_top_container">
        <div className="side_menu_top_inner_container">
          <div className="side_menu_logo_container">
            <img src={logo} alt="src missing" className="side_menu_logo" />
          </div>
          <span
            className={`side_menu_top_company_name ${
              expandMenu ? "" : "side_menu_top_company_name_collapse"
            }`}>
            CARRYME
          </span>
        </div>
      </Link>

      <div className="side_menu_bottom_container">
        <NavList expandMenu={expandMenu} />
      </div>
    </aside>
  );
}
SideMenu.propTypes = {
  expandMenu: PropTypes.bool,
};
export default SideMenu;
