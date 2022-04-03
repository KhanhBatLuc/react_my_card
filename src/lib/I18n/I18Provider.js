import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import messages from './messages';

import { LOCALES } from 'src/lib/utils/constants';

const I18Provider = ({ children, locale }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

I18Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES))
};

export default I18Provider;
