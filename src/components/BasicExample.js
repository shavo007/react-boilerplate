import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={LoadableTopics} />
      </div>
    </Suspense>
  </Router>
);
export default BasicExample;
