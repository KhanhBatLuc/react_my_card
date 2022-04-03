import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'tag.name.register': 'Đăng Ký',
  'notify.register': 'Bạn đã có tài khoản?',
  'login': 'Đăng nhập',
  'intro.app': 'Kết nối mọi người nhanh chóng',
  'title.privacy': 'Chính sách bảo mật',
  'title.term': 'Điều khoản và dịch vụ',
  'title.agree': 'Bằng cách đăng ký, Tôi đồng ý với MyCards',
  'title.has.account': 'Bạn đã có tài khoản?',
  'register.form.email': 'Địa chỉ email',
  'register.form.password': 'Mật khẩu',
  'register.form.confirm.password': 'Xác nhận mật khẩu',
  'register.form.errors.required.email':
    'Vui lòng nhập email',
  'register.form.errors.valid.email':
    'Không đúng định dạng email',
  'register.form.errors.required.password':
    'Vui lòng nhập mật khẩu',
  'register.form.errors.required.confirm.password':
    'Mật khẩu không phù hợp',
};

export default prefixMessages(prefix, messages);
