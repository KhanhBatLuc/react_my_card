import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'title.digital': 'Một danh thiếp kỹ thuật số từ MyCard',
  'button.your.card': 'ĐÂY LÀ CARD CỦA BẠN',
  'button.connect': 'KẾT NỐI',
  'button.send': 'GỬI',
  'change.contact': 'Thay đổi danh bạ'
};

export default prefixMessages(prefix, messages);
