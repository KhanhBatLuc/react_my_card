import layoutPage from '../I18n/layoutPage/message';
import authMessages from 'src/features/auth/lib/i18n/messages';
import cardAddingMessages from 'src/features/card/lib/i18n/message';
import cardViewingMessages from 'src/features/card/lib/i18n/message';
import cardPublishingMessages from 'src/features/card/lib/i18n/message';

const messages = {
  'vi-VN': {
    ...layoutPage['vi-VN'],
    ...authMessages['vi-VN'],
    ...cardAddingMessages['vi-VN'],
    ...cardViewingMessages['vi-VN'],
    ...cardPublishingMessages['vi-VN']
  },
  'en-US': {
    ...layoutPage['en-US'],
    ...authMessages['en-US'],
    ...cardAddingMessages['en-US'],
    ...cardViewingMessages['en-US'],
    ...cardPublishingMessages['en-US']
  }
};

export default messages;
