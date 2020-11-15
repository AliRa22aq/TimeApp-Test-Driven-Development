import React from 'react';
import {shallow} from 'enzyme';
import App from './App'
import {Timer} from '../Timer/Timer';


describe("App", ()=>{

    const container = shallow(<App />);

    it("Should render a <div />", ()=>{
        expect(container.find('div').length).toEqual(1)
    })

    it("should render the Time Component", () => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true)
      })
    
})