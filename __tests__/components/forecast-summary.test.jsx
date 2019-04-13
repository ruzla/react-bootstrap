import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={130419}
      temperature={20}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__date').text()).toEqual('130419');
});

it('renders the temperature', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={130419}
      temperature={20}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('20');
});

it('renders the description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={130419}
      temperature={20}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={130419}
      temperature={20}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__icon').text()).toEqual('mockIcon');
});
