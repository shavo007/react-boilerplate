import React, { Suspense, lazy, Component } from 'react';

const LoadableBar = lazy(() => import('./Bar'));

class Foo extends React.Component {
  render() {
    return (
      <div>
        <h1>Showcase code splitting</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <LoadableBar />
        </Suspense>
      </div>
    );
  }
}

export default Foo;
