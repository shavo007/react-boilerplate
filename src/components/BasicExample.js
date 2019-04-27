import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const LoadableTopics = lazy(() => import('./Topics'));

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const BasicExample = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Lazy loading Topics</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={LoadableTopics} />
        </Switch>
      </div>
    </Suspense>
  </Router>
);
export default BasicExample;
