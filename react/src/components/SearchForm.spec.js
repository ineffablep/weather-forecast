import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput';
import  SearchButton from './SearchButton';
chai.use(sinonChai);

describe('<SearchForm />', () => {
    it('should render form element', () => {
        const props = {
            onSearchClick: sinon.spy(),
            disabled:false,
            loading:false,
            search:{city:'London'}
        };

        const wrapper = shallow(<SearchForm {...props} />);


        expect(wrapper.find('form')).to.have.length(1);

    });
    it('should render unitsLabel', () => {
        const props = {
            onSearchClick: sinon.spy(),
            disabled:false,
            loading:false,
            search:{city:'London'}
        };

        const wrapper = shallow(<SearchForm {...props} />);

        const label= wrapper.find('.unitsLabel');
        expect(label).to.have.length(1);
        expect(label.text()).to.equal('Units');

    });

    it('should render select', () => {
        const props = {
            onSearchClick: sinon.spy(),
            disabled:false,
            loading:false,
            search:{city:'London'}
        };

        const wrapper = shallow(<SearchForm {...props} />);

        const select= wrapper.find('select');
        expect(select).to.have.length(1);

    });

    it('should render cityLabel', () => {
        const props = {
            onSearchClick: sinon.spy(),
            disabled:false,
            loading:false,
            search:{city:'London'}
        };

        const wrapper = shallow(<SearchForm {...props} />);

        const label= wrapper.find('.cityLabel');
        expect(label).to.have.length(1);
        expect(label.text()).to.equal('City');

    });
    it('should render SearchButton', () => {
        const props = {
            onSearchClick: sinon.spy(),
            disabled:false,
            loading:false,
            search:{city:'London'}
        };

        const wrapper = shallow(<SearchForm {...props} />);

        const label= wrapper.find(SearchButton);
        expect(label).to.have.length(1);

    });
    it('should render SearchInput', () => {
        const props = {
            onSearchClick: sinon.spy(),
            disabled:false,
            loading:false,
            search:{city:'London'}
        };

        const wrapper = shallow(<SearchForm {...props} />);

        const label= wrapper.find(SearchInput);
        expect(label).to.have.length(1);

    });
});
