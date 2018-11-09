import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('<Card/>', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Card>HELLO</Card>);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the children', () => {
    const wrapper = shallow(<Card>HELLO</Card>);
    expect(wrapper.prop('children')).toEqual('HELLO');
  });
});
