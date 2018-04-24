import React from 'react';
import { shallow } from 'enzyme';

import DropdownItem from './';

describe('DropdownItem', () => {
  let item = shallow(<DropdownItem text="Send moneys" link="https://transferwise.com/bisnes" />);

  it('has text', () => {
    expect(text()).toBe('Send moneys');
  });

  it('has correct link', () => {
    expect(link()).toBe('https://transferwise.com/bisnes');
  });

  it('does not have badge if not specified', () => {
    expect(badge().exists()).toBe(false);
  });

  it('has badge', () => {
    item = shallow(
      <DropdownItem text="Send moneys" link="https://transferwise.com/bisnes" badge="new" />,
    );

    expect(badge().exists()).toBe(true);
  });

  function text() {
    return anchor().text();
  }

  function link() {
    return anchor().prop('href');
  }

  function anchor() {
    return item.find('a');
  }

  function badge() {
    return item.find('.badge');
  }
});