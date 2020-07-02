import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Tests in AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('It should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('It should change the input text', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
        input.simulate('change', { target: { value } });
    })

    test('It shouldnt post the data with submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('It should call the function setCategories and clean the input', () => {
        const input = wrapper.find('input');
        const value = 'Relajate medusin';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategories).toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalledTimes(1);
        expect(input.props().value).toBe('');
    })



})
