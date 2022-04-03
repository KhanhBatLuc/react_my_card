import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'name.card': 'Name Card',
  'button.card.adding': 'SAVE',
  'adding.form.title.default.img': 'Upload a photo',
  'adding.form.full.name': 'Full name',
  'adding.form.company.name': 'Company name',
  'adding.form.title': 'Title',
  'adding.form.about': 'About',
  'adding.form.update.photo': 'UPDATE PHOTO',
  'adding.form.choose.photo': 'Choose a photo',
  'adding.form.remove.photo': 'remove a photo',
  'information.form.title.information': 'Add Information',
  'information.form.placeholder.phone.number': 'Phone Number',
  'information.form.placeholder.address': 'Address',
  'label.input.text.area': 'About',
  'label.input.default': 'Enter title (Optional)',
  'errors.required.card.name': 'Please Enter Name Card',
  'errors.max.card.name': 'Name Card cannot exceed 255 characters',
  'errors.required.full.name':
    'Please Enter Full Name or Company Name (or both)',
  'errors.max.full.name': 'Full Name Card cannot exceed 255 characters',
  'errors.max.company.name': 'Company Name Card cannot exceed 255 characters',
  'errors.max.title': 'Title cannot exceed 255 characters',
  'errors.max.about': 'About Card cannot exceed 255 characters',
  'errors.required.picture': 'Please Add Profile Picture',
  'errors.required.phone.number': 'Please Enter Phone Number',
  'errors.required.email': 'Please Enter Email',
  'errors.required.address': 'Please Enter Address',
  'errors.required.address.web': 'Please Enter Website',
  'errors.required.link': 'Please Enter Link',
  'errors.required.face.book': 'Please Enter Facebook',
  'errors.required.youtube': 'Please Enter Youtube',
  'errors.required.tiktok': 'Please Enter Tiktok',
  'errors.required.zalo': 'Please Enter Zalo',
  'errors.required.note': 'Please Enter About',
  'errors.max.note': 'Title cannot exceed 2000 characters',
  'errors.required.twitter': 'Please Enter Twitter',
  'errors.required.instagram': 'Please Enter Instagram',
  'errors.required.linked.in': 'Please Enter linkedIn',
  'errors.required.whatsapp': 'Please Enter Whatsapp',
  'errors.required.github': 'Please Enter Github',
  'errors.required.telegram': 'Please Enter Telegram',
  'errors.required.skype': 'Please Enter Skype'
};

export default prefixMessages(prefix, messages);
