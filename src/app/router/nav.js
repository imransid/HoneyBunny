import React from "react";
import Home from "../template/template";
import Admin from "../template/adminTemplate";
import { Switch, Route } from "react-router-dom";

const nav = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/_about" component={Admin} />
      </Switch>
    </main>
  );
};

export default nav;
