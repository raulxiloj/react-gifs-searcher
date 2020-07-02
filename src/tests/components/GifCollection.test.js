import React from 'react';
import { shallow } from "enzyme"
import { GifCollection } from "../../components/GifCollection"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Tests for GifCollection component ', () => {

    const category = 'Hello'

    test('It should render the component correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifCollection category={category} />)
        expect(wrapper).toMatchSnapshot();
    })

    test('It should show the items when the imgs are loaded useFetchGifs', () => {

        const gifs = [{
            id: '123',
            title: 'Anything gg',
            url: 'https://localhost/anything',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifCollection category={category} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifItem').length).toBe(gifs.length);
    })


})
