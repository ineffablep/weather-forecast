import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import PageHeader from './PageHeader';

chai.use(sinonChai);

describe('<PageHeader />', () => {
    it('should be h1 element', () => {
        const props = {
            headerText:'test'
        };

        const wrapper = shallow(<PageHeader {...props} />);

        const actual = wrapper.type();
        const expected = 'h1';

        expect(actual).to.equal(expected);
    });
    it('should render text', () => {
        const props = {
            headerText:'test'
        };

        const wrapper = shallow(<PageHeader {...props} />);

        const actual = wrapper.type();
        const expected = 'h1';

        expect(wrapper.text()).to.equal('test');
    });
});
