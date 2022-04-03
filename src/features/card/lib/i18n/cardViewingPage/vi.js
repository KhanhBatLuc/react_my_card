import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'search.viewing.card': 'Tìm kiếm Card',
  'name.viewing.card': 'Thêm Card',
  'navbar.viewing.card.delete': 'Xoá',
  'navbar.viewing.card.edit': 'Chỉnh sửa',
  'form.share.info.title.send.card': 'Chia sẻ Card',
  'form.share.info.alert.scanner': 'Quét hoặc nhấn chọn để xem',
  'form.share.info.button.coppy': 'SAO CHÉP',
  'form.share.info.text.form.text': 'Điền đầy đủ thông tin của bạn :',
  'form.share.info.text.form.name': 'Tên của bạn',
  'form.share.info.text.form.phone': 'Số điện thoại',
  'form.share.info.text.form.message': 'Thông tin cần gửi',
  'form.share.info.text.form.button.send': 'GỬI',
  'form.share.info.email.form.name': 'Tên của bạn',
  'form.share.info.email.form.email': 'Email',
  'form.share.info.email.form.message': 'Thông tin cần gửi'
};

export default prefixMessages(prefix, messages);
