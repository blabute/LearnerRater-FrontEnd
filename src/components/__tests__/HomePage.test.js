import HomePage from '../HomePage';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

describe('<HomePage />', () => {

  it('renders h1 with title of page', () => {
    const homePage = shallow(<HomePage />);
    expect(homePage).to.have.text('LearnerRater');
  });
});
