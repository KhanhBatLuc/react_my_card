import _keys from 'lodash/keys';

export default function prefixMessages(prefix, messages) {
  const messagesWithPrefix = {};
  _keys(messages).forEach((prop) => {
    messagesWithPrefix[prefix + prop] = messages[prop];
  });
  return messagesWithPrefix;
}
