import React from "react";
import Nav from "./app/router/nav";
import { Provider } from "react-redux";
import store from "./app/config/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
      </div>
    </Provider>
  );
}

export default App;
