import React, { useState } from "react";
import "../../template/asset/app.css";

const Customli = (props) => {
  return (
    <li className={props.cls_active == props.name ? "activeX" : ""}>
      <a
        className="Anch"
        href="#"
        onClick={() => (props.setvalue(), props.updateContent(props.name))}
      >
        {props.name}
      </a>
    </li>
  );
};

const SideMenu = (props) => {
  const [active, setActive] = useState("Home");
  return (
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>{props.name}</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Menu Bar</p>
        <Customli
          name="Home"
          cls_active={active}
          setvalue={() => setActive("Home")}
          updateContent={(e) => props.updateContent(e)}
        />
        <Customli
          name="Customes"
          cls_active={active}
          setvalue={() => setActive("Customes")}
          updateContent={(e) => props.updateContent(e)}
        />
        <Customli
          name="Suppliers"
          cls_active={active}
          setvalue={() => setActive("Suppliers")}
          updateContent={(e) => props.updateContent(e)}
        />
        <Customli
          name="Users"
          cls_active={active}
          setvalue={() => setActive("Users")}
          updateContent={(e) => props.updateContent(e)}
        />
        <Customli
          name="Categories"
          cls_active={false}
          setvalue={() => setActive("Categories")}
          updateContent={(e) => props.updateContent(e)}
        />
        <Customli
          name="Product"
          cls_active={active}
          setvalue={() => setActive("Product")}
          updateContent={(e) => props.updateContent(e)}
        />
        <Customli
          name="Order"
          cls_active={active}
          setvalue={() => setActive("Order")}
          updateContent={(e) => props.updateContent(e)}
        />
      </ul>
    </nav>
  );
};
export default SideMenu;
