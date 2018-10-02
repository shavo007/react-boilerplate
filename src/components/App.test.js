import App from "./App";
import React from "react";

it("should match snapshot", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
