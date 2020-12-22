import React from 'react';
import {GifExpertApp} from '../GifExpertApp';
import {shallow} from 'enzyme';

describe('Pruebas en <GifExpertApp />', () => {
    
    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Overwatch', 'LoR'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })

})
