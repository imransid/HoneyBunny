import React, { useState } from "react";
import Navbar from "../elements/navbar/Navbar";
import SideBar from "../components/sideMenu/sideMenu";
import Categories from "../components/categories/Categories";
import Home from "../components/home/Home";
import Customes from "../components/customes/Customes";
import Suppliers from "../components/suppliers/Suppliers";
import Users from "../components/users/Users";
import Order from "../components/order/Order";
import Product from "../components/product/Product";

import "../template/asset/app.css";

const AdminTemplate = (props) => {
  const [selectMenu, SetSelectMenu] = useState("Home");
  return (
    <body>
      <div class="wrapper" style={{ width: "100%" }}>
        {/* <!-- Sidebar --> */}
        <SideBar name="honeybunny" updateContent={(e) => SetSelectMenu(e)} />
        {/* <!-- Page Content --> */}
        <div id="content">
          <Navbar name="honeybunny" />
          <div className="row" style={{ paddingLeft: 20, paddingRight: 20 }}>
            <div class="jumbotron">
              <div class="container">
                {selectMenu == "Home" ? (
                  <Home />
                ) : selectMenu == "Customes" ? (
                  <Customes />
                ) : selectMenu == "Suppliers" ? (
                  <Suppliers />
                ) : selectMenu == "Users" ? (
                  <Users />
                ) : selectMenu == "Categories" ? (
                  <Categories />
                ) : selectMenu == "Order" ? (
                  <Order />
                ) : (
                  <Product />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AdminTemplate;
