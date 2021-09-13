
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import SiderDemo from "../layout/Layout";
import { LoginComponent } from "../login/Login";

export const RouterComponent=()=> {
  return (
    <BrowserRouter>
      <div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route exact path="/">
            <LoginComponent />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/mainPage">
            <SiderDemo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
