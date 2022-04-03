import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'sidebar.menu.account.home': 'Trang Chủ',
  'sidebar.menu.account.profile': 'Tài khoản',
  'sidebar.menu.account.settings': 'Cài Đặt',
  'navbar.menu.dashboard': 'Trang Chủ',
  'navbar.menu.contact': 'Liên Hệ'
};

export default prefixMessages(prefix, messages);
