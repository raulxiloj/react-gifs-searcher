import React from 'react';
import { shallow } from 'enzyme'
import { GifItem } from '../../components/GifItem';


describe('Tests in GifCollection', () => {

    const title = 'some title';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifItem title={title} url={url} />);

    test('Should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('The parragraph should have the title text', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('The image should have the title and the url of the props', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })

    test('should have the css class card', () => {
        const div = wrapper.find('div');
        expect(div.props().className.includes('card')).toBe(true);
    })

})