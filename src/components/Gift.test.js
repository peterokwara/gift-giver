import React from "react";
import Enzyme, { shallow } from "enzyme";
import Gift from "./Gift";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });
});
