import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_body">
            <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
