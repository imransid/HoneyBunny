import React from "react";

const TopHeader = props => {
  return (
    <div id="top-header">
      <div className="container">
        <div className="pull-left">
          <span>Welcome to {props.title}</span>
        </div>
        <div className="pull-right">
          <ul className="header-top-links">
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li className="dropdown default-dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                ENG <i className="fa fa-caret-down"></i>
              </a>
              <ul className="custom-menu">
                <li>
                  <a href="#">English (ENG)</a>
                </li>
                <li>
                  <a href="#">Russian (Ru)</a>
                </li>
                <li>
                  <a href="#">French (FR)</a>
                </li>
                <li>
                  <a href="#">Spanish (Es)</a>
                </li>
              </ul>
            </li>
            <li className="dropdown default-dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                USD <i className="fa fa-caret-down"></i>
              </a>
              <ul className="custom-menu">
                <li>
                  <a href="#">USD ($)</a>
                </li>
                <li>
                  <a href="#">EUR (€)</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
