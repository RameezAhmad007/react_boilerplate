import React, { useState } from "react";
import { FaThList, FaChevronLeft } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";
import { MdChat } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function NavList(props) {
  const { expandMenu } = props;
  const [expandDropdown, setExpandDropdown] = useState(false);
  return (
    <>
      <div className="nav_list_dropdown">
        <div
          tabIndex="0"
          role="button"
          className={`nav_list_header ${
            expandDropdown ? "nav_list_header_expand" : ""
          }`}
          onClick={() => {
            setExpandDropdown(!expandDropdown);
          }}
          onKeyDown={e => {
            if (e.key.toLowerCase() === "enter") {
              setExpandDropdown(!expandDropdown);
            }
          }}>
          <FaThList className="nav_list_icon" />
          <div
            className={`nav_list_title_container ${
              expandMenu ? "" : "nav_list_title_container_collapse"
            }`}>
            <span className="nav_list_title">Orders</span>
            <FaChevronLeft
              className={`nav_list_arrow ${
                expandDropdown ? "nav_list_arrow_rotate" : ""
              }`}
            />
          </div>
        </div>
        <div
          className={`nav_list_container ${
            expandDropdown ? "" : "nav_list_container_collapse"
          }`}>
          <NavLink to="neworder" className="nav_list_chunk">
            <ImRadioUnchecked className="nav_link_chunk_icon" />
            <span
              className={`nav_list_chunk_title ${
                expandMenu ? "" : "nav_list_chunk_title_collapse"
              }`}>
              New Order
            </span>
          </NavLink>
          <NavLink to="activeorder" className="nav_list_chunk">
            <ImRadioUnchecked className="nav_link_chunk_icon" />
            <span
              className={`nav_list_chunk_title ${
                expandMenu ? "" : "nav_list_chunk_title_collapse"
              }`}>
              Active Order
            </span>
          </NavLink>
          <NavLink to="deliveredorder" className="nav_list_chunk">
            <ImRadioUnchecked className="nav_link_chunk_icon" />
            <span
              className={`nav_list_chunk_title ${
                expandMenu ? "" : "nav_list_chunk_title_collapse"
              }`}>
              Delivered Order
            </span>
          </NavLink>
          <NavLink to="cancelorder" className="nav_list_chunk">
            <ImRadioUnchecked className="nav_link_chunk_icon" />
            <span
              className={`nav_list_chunk_title ${
                expandMenu ? "" : "nav_list_chunk_title_collapse"
              }`}>
              Cancel Order
            </span>
          </NavLink>
        </div>
      </div>
      <NavLink to="chat" className="nav_link">
        <MdChat className="nav_link_icon" />
        <span
          className={`nav_link_title ${
            expandMenu ? "" : "nav_link_title_collapse"
          }`}>
          Chat
        </span>
      </NavLink>
    </>
  );
}

export default NavList;
