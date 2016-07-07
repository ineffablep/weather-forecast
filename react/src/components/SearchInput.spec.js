import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SearchInput from './SearchInput';

chai.use(sinonChai);

describe('<SearchInput />', () => {
    it('should be an input element', () => {
        const props = {
            search: {city:'London'},
            onChange: sinon.spy(),
            placeholder: 'Type Here',
            value: 100
        };

        const wrapper = shallow(<SearchInput {...props} />);

        const actual = wrapper.type();
        const expected = 'input';

        expect(actual).to.equal(expected);
    });

    it('should handle change', () => {
        const props = {
            search: {city:'London'},
            onChange: sinon.spy(),
            placeholder: 'Type Here',
            value: 100
        };

        const wrapper = shallow(<SearchInput {...props} />);

        const actual = wrapper.type();
        const expected = 'input';

        expect(actual).to.equal(expected);
        wrapper.simulate('change', {target: {value: 101}});
        expect(props.onChange).to.have.been.calledWith(101);
    });
});