import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SearchButton from './SearchButton';

chai.use(sinonChai);

describe('<SearchButton />', () => {
    it('should be a button element', () => {
        const props = {
            onClick: sinon.spy(),
            loading: false,
            disabled: false
        };

        const wrapper = shallow(<SearchButton {...props} />);

        const actual = wrapper.type();
        const expected = 'button';

        expect(actual).to.equal(expected);
    });

    it('should handle click', () => {
        const props = {
            onClick: sinon.spy(),
            loading: false,
            disabled: false
        };

        const wrapper = shallow(<SearchButton {...props} />);

        const actual = wrapper.type();
        const expected = 'button';

        expect(actual).to.equal(expected);
        wrapper.find('button').simulate('click');
        expect(props.onClick).to.have.property('callCount', 1);
    });

    it('should contain text Search', () => {
        const props = {
            onClick: sinon.spy(),
            loading: false,
            disabled: false
        };

        const wrapper = shallow(<SearchButton {...props} />);

        const actual = wrapper.type();
        const expected = 'button';

        expect(actual).to.equal(expected);
        expect(wrapper.text()).to.contain('Search');
    });

    it('should contain text Loading', () => {
        const props = {
            onClick: sinon.spy(),
            loading: true,
            disabled: false
        };

        const wrapper = shallow(<SearchButton {...props} />);

        const actual = wrapper.type();
        const expected = 'button';

        expect(actual).to.equal(expected);
        expect(wrapper.text()).to.contain('Loading ...');
    });

});
