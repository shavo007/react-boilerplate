import Loadable from "react-loadable";
import React, { Component } from "react";

const LoadableBar = Loadable({
  loader: () => import("./Bar"),
  loading() {
    return <div>Loading...</div>;
  }
});

class Foo extends React.Component {
  render() {
    return (
      <div>
		  <h1>Showcase code splitting</h1>
		  <LoadableBar />
      </div>
    );
  }
}

export default Foo;
