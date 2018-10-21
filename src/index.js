import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./components/SearchContainer";
import ModelOfTheWeek from "./components/ModelOfTheWeek";
import Car from "./components/CarCarModelContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () =>
  (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={ModelOfTheWeek} />
          <Route path="/search" component={Search} />
          <Route path="/make/model/:id" component={Car} />
        </div>
      </Router>
    </Provider>
  );

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
