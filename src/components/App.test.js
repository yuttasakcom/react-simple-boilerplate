import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import React from "react";
import App from "./App";

configure({ adapter: new Adapter() });

const setup = () => shallow(<App />);

it("should render App component", () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});

it("should render tag h1 equal App Component", () => {
  const wrapper = setup();
  const h1 = wrapper.find("h1");
  expect(h1.text()).toEqual("App Component");
});
