import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});
