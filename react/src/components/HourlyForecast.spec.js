import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import HourlyForecast from './HourlyForecast';

chai.use(sinonChai);

describe('<HourlyForecast />', () => {
    it('should render heading', () => {
        const props = {
            onClick: sinon.spy(),
            unitFlag:'metrics',
            city:'London',
            date:new Date().toLocaleDateString(),
            list:[]
        };

        const wrapper = shallow(<HourlyForecast {...props} />);
        const heading =wrapper.find('.panel-heading');
        expect(heading).to.have.length(1);
        expect(heading.text()).to.contains('London');

    });

});