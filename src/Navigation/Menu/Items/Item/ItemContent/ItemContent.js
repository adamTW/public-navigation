import React, { Fragment } from 'react';
import Types from 'prop-types';

import './ItemContent.less';

const ItemContent = ({ text, Icon, hasCaret }) => (
  <Fragment>
    <Icon className="tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-1" />
    <span className="tw-public-navigation-item-content__text text-ellipsis">{text}</span>
    {hasCaret && <span className="caret" />}
  </Fragment>
);

ItemContent.propTypes = {
  text: Types.string.isRequired,
  Icon: Types.func.isRequired,
  hasCaret: Types.bool,
};

ItemContent.defaultProps = {
  hasCaret: false,
};

export default ItemContent;
