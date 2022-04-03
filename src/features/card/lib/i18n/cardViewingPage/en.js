import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'search.viewing.card': 'Search Card',
  'name.viewing.card': 'Add Card',
  'navbar.viewing.card.delete': 'Delete',
  'navbar.viewing.card.edit': 'Edit',
  'form.share.info.title.send.card': 'Send Card',
  'form.share.info.alert.scanner': 'Scanner or Click to preview',
  'form.share.info.button.coppy': 'COPPY LINK',
  'form.share.info.text.form.text':
    'Fill in your information in the box below :',
  'form.share.info.text.form.name': 'Name',
  'form.share.info.text.form.phone': 'Phone',
  'form.share.info.text.form.message': 'Message',
  'form.share.info.text.form.button.send': 'SEND',
  'form.share.info.email.form.name': 'Name',
  'form.share.info.email.form.email': 'Email',
  'form.share.info.email.form.message': 'Message'
};

export default prefixMessages(prefix, messages);
