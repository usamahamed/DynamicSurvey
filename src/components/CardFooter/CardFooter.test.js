import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from './index';

describe('<CardFooter/>', () => {
  const clickBack = jest.fn();
  const clickSubmit = jest.fn();
  const wrapper = shallow(<CardFooter clickBack={clickBack} clickSubmit={clickSubmit} />);

  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders two buttons', () => {
    expect(wrapper.find('Button').length).toEqual(2);
  });
});
