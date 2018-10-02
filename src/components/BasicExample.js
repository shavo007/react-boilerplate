import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Topics = Loadable({
  loader: () => import("./Topics"),
  loading() {
    return <div>Loading...</div>;
  }
});

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
export default BasicExample;
