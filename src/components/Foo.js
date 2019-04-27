import React, { Suspense, lazy } from 'react';

const LoadableBar = lazy(() => import('./Bar'));

const Foo = () => (
  <div>
    <h1>Showcase code splitting</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LoadableBar />
    </Suspense>
  </div>
);

export default Foo;
