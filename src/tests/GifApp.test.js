import React from 'react';
import { shallow } from "enzyme"
import GifApp from "../GifApp"

describe('Tests for GifApp component', () => {

    test('It should render the component correctly', () => {
        const wrapper = shallow(<GifApp />)
        expect(wrapper).toMatchSnapshot();
    })

})
