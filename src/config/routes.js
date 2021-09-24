import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Report from "../pages/Report";

export default (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/report/:id">
      <Report />
    </Route>
    <Route path="*">
      <Notfound />
    </Route>
  </Switch>
);
