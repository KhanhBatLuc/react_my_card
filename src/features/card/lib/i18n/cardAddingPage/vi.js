import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'name.card': 'Tên Card',
  'button.card.adding': 'Lưu',
  'adding.form.title.default.img': 'Tải hình ảnh ở đây',
  'adding.form.full.name': 'Tên đầy đủ',
  'adding.form.company.name': 'Tên công ty đầy đủ',
  'adding.form.title': 'Chức vụ',
  'adding.form.about': 'Giới thiệu',
  'adding.form.update.photo': 'CẬP NHẬT ẢNH',
  'adding.form.choose.photo': 'Chọn hình ảnh',
  'adding.form.remove.photo': 'Xóa ảnh',
  'information.form.title.information': 'Thêm Thông Tin',
  'information.form.placeholder.phone.number': 'Số điện thoại',
  'information.form.placeholder.address': 'Địa chỉ',
  'label.input.text.area': 'Nội dung',
  'label.input.default': 'Nhập tiêu đề (Không bắt buộc)',
  'errors.required.card.name': 'Nhập tên Card',
  'errors.max.card.name': 'Tên không được vượt quá 255 ký tự',
  'errors.required.full.name': 'Nhập họ tên hoặc Tên công ty (hoặc cả hai)',
  'errors.max.full.name': 'Họ Tên không được vượt quá 255 ký tự',
  'errors.max.company.name': 'Tên Công Ty không được vượt quá 255 ký tự',
  'errors.max.title': 'Chức vụ không được vượt quá 255 ký tự',
  'errors.max.about': '(Giới thiệu) không được vượt quá 255 ký tự',
  'errors.required.picture': 'Thêm ảnh đại diện',
  'errors.required.phone.number': 'Vui lòng nhập số điện thoại',
  'errors.required.email': 'Vui lòng nhập email',
  'errors.required.address': 'Vui lòng nhập địa chỉ',
  'errors.required.address.web': 'Vui lòng nhập địa chỉ Website',
  'errors.required.link': 'Vui lòng nhập Link',
  'errors.required.face.book': 'Vui lòng nhập Facebook',
  'errors.required.youtube': 'Vui lòng nhập Youtube',
  'errors.required.tiktok': 'Vui lòng nhập Tiktok',
  'errors.required.zalo': 'Vui lòng nhập Zalo',
  'errors.required.note': 'Vui lòng nhập nội dung',
  'errors.max.note': 'Tiêu đề không được vượt quá 2000 ký tự',
  'errors.required.twitter': 'Vui lòng nhập Twitter',
  'errors.required.instagram': 'Vui lòng nhập Instagram',
  'errors.required.linked.in': 'Vui lòng nhập linkedIn',
  'errors.required.whatsapp': 'Vui lòng nhập Whatsapp',
  'errors.required.github': 'Vui lòng nhập Github',
  'errors.required.telegram': 'Vui lòng nhập Telegram',
  'errors.required.skype': 'Vui lòng nhập Skype'
};

export default prefixMessages(prefix, messages);
