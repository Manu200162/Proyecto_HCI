import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleFlight,
  Scheduled,
  Error,
  Aircrafts,
  Flights,
  AuthWrapper,
  SingleAircraft,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aircrafts">
            <Aircrafts />
          </Route>
          <Route exact path="/scheduled">
            <Scheduled />
          </Route>
          <Route exact path="/flights">
            <Flights />
          </Route>
          <Route exact path="/flights/:id" children={<SingleFlight />} />
          <Route exact path="/aircrafts/:id" children={<SingleAircraft />} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
