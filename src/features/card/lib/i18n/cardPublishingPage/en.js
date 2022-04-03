import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'title.digital': 'A digital business card from MyCard',
  'button.your.card': 'THIS IS YOUR CARD',
  'button.connect': 'CONNECT',
  'button.send': 'SEND',
  'change.contact': 'Change Contact'
};

export default prefixMessages(prefix, messages);
