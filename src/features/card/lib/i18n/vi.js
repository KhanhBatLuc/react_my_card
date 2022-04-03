import { viMessages as cardAddingMessages } from './cardAddingPage';
import { viMessages as cardViewingMessages } from './cardViewingPage';
import { viMessages as cardPublishingMessages } from './cardPublishingPage';

const messages = {
  ...cardAddingMessages,
  ...cardViewingMessages,
  ...cardPublishingMessages
};

export default messages;
