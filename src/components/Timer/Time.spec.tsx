import React from "react"
import {shallow } from "enzyme";
import {Timer} from "./Timer"

describe("Timer", () => {
  let container:any;

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })

  it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3)
  })

  it('should render a div in Timer', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it('should render a class displaytimer', () => {
    expect(container.find('.time-display').length).toEqual(1);
  });


  it('render a TimerButton', () => {
    expect(container.find("TimerButton").length).toBeGreaterThanOrEqual(3);
  })

});