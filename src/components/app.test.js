import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  // array of gifts
  it("initializes the 'state' with an empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the 'add-gift' button", () => {
    const id = 1;

    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    it("adds a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("adds a new gift to the rendered list", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("creates a gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("and the user wants to remove the added gift", () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it("removes the gift from `state`", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
