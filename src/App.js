import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import Sidebar from "./Sidebar";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
