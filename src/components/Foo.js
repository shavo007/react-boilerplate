import React, { Component, Suspense, lazy } from 'react';
import { Button } from 'baseui/button';

const LoadableBar = lazy(() => import('./Bar'));

export default class Foo extends Component {
  state = { Toastify: null };

  loadToastify = () => {
    import(/* webpackChunkName: "Toastify" */ './Toastify').then(Toastify =>
      this.setState({ Toastify: Toastify.default })
    );
  };

  render() {
    const { Toastify } = this.state;

    return (
      <div>
        <h1>Showcase code splitting</h1>
        <Button
          onClick={() => {
            this.loadToastify();
          }}
        >
          Click me to demo dynamic import
        </Button>
        {Toastify ? <Toastify /> : null}

        <Suspense fallback={<div>Loading...</div>}>
          <LoadableBar />
        </Suspense>
      </div>
    );
  }
}
