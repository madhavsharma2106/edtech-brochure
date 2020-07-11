import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, CoursesPage } from "./components/pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/courses">
          <CoursesPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
