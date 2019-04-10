/* eslint-disable react/no-array-index-key */
import React from 'react';
import Types from 'prop-types';

import Item from './Item';

const Items = ({ items, inverse, language, availableLanguages, onLanguageChange, activePath }) => (
  <ul className="nav navbar-nav navbar-right">
    {items.map((item, index) => (
      <Item
        {...item}
        key={index}
        inverse={inverse}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={onLanguageChange}
        activePath={activePath}
      />
    ))}
  </ul>
);

Items.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      translationKey: Types.string,
    }),
  ).isRequired,
  inverse: Types.bool,
  language: Types.string.isRequired,
  availableLanguages: Types.arrayOf(Types.shape({})),
  onLanguageChange: Types.func,
  activePath: Types.string,
};

Items.defaultProps = {
  inverse: false,
  availableLanguages: undefined,
  onLanguageChange: undefined,
  activePath: undefined,
};

export default Items;
