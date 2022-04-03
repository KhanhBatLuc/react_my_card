import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'sidebar.menu.account.home': 'Home',
  'sidebar.menu.account.profile': 'Profile',
  'sidebar.menu.account.settings': 'Settings',
  'navbar.menu.dashboard': 'Dashboard',
  'navbar.menu.contact': 'Contact'
};

export default prefixMessages(prefix, messages);
