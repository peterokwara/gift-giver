import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

// array of gifts
it("initializes the 'state' with an empty list of gifts", () => {
  expect(app.state().gifts).toEqual([]);
});

it("it adds a new gift to `state` when clicking `add gift` button", () => {
  app.find(".btn-add").simulate("click");
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
