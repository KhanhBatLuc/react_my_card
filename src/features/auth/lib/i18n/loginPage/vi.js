import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'without.account.question': 'Bạn chưa có tài khoản?',
  'without.account.get.started': 'Bắt đầu',
  'greeting': 'Xin chào bạn !',
  'sign.in': 'Đăng nhập cùng HiHello',
  'sign.in.details': 'Điền thông tin vào bên dưới.',
  'sign.in.or': 'Hoặc',
  'login.form.email': 'Địa chỉ email',
  'login.form.password': 'Mật khẩu',
  'login.form.remember.me': 'Nhớ tài khoản',
  'login.form.forgot.password': 'Quên mật khẩu?',
  'login.form.login': 'Đăng nhập',
  'login.form.errors.required.email': 'Vui lòng nhập email',
  'login.form.errors.valid.email': 'Không đúng định dạng email',
  'login.form.errors.max.email':
    'Email không vượt quá 150 kí tự',
  'login.form.errors.required.password':
    'Vui lòng nhập mật khẩu',
  'login.form.errors.code.400':
    'Email hoặc mật khẩu không chính xác',
  'login.form.errors.code.600':
    'Không có kết nối, vui lòng kiểm tra đường truyền internet!',
};

export default prefixMessages(prefix, messages);
