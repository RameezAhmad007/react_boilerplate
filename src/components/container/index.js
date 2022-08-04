import React, { useState } from "react";
import PropTypes from "prop-types";
import ChildContainer from "../childContainer";
import Header from "../header";
import SideMenu from "../sideMenu";
import "./styles.scss";

function Container(props) {
  const { children } = props;
  const [expandMenu, setExpandMenu] = useState(false);
  return (
    <div className="main_container">
      <SideMenu expandMenu={expandMenu} />
      <Header expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
      <ChildContainer expandMenu={expandMenu}>{children}</ChildContainer>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
