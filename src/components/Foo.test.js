import Foo from "./Foo";
import React from "react";

it("should match snapshot", () => {
  const wrapper = shallow(<Foo />);
  console.log(wrapper.debug());

  expect(wrapper.find("h1").text()).toBe("Showcase code splitting");
  expect(wrapper).toMatchSnapshot();
});
