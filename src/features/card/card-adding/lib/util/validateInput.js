import _ from 'lodash';
import { FormattedMessage } from 'react-intl';

import i18n from '../../../lib/i18n';

import {
  responseSuccess,
  responseError422
} from 'src/lib/utils/responseStatus';

export const checkDataInput = (data) => {
  const { errors } = i18n.cardAdd.CardAddingPage;
  const {
    card_name,
    full_name,
    company_name,
    title,
    about,
    cover_images,
    profile_picture
  } = data;

  const error = {};
  if (!card_name.value) {
    error.card_name = <FormattedMessage {...errors.requiredCardName} />;
  }
  if (card_name.value.length > 255) {
    error.card_name = <FormattedMessage {...errors.maxCardName} />;
  }
  if (!full_name.value) {
    error.full_name = <FormattedMessage {...errors.requiredFullName} />;
  }
  if (full_name.value.length > 255) {
    error.full_name = <FormattedMessage {...errors.maxFullName} />;
  }
  if (company_name.value.length > 255) {
    error.company_name = <FormattedMessage {...errors.maxCompanyName} />;
  }
  if (title.value.length > 255) {
    error.title = <FormattedMessage {...errors.maxTitle} />;
  }
  if (about.value.length > 255) {
    error.about = <FormattedMessage {...errors.maxAbout} />;
  }
  if (!cover_images.value && !profile_picture.value) {
    error.picture = <FormattedMessage {...errors.requiredPicture} />;
  }

  return _.isEmpty(error)
    ? responseSuccess('success')
    : responseError422(error);
};

export const checkDataInputInformation = (arrInformation) => {
  const { errors } = i18n.cardAdd.CardAddingPage;
  const error = {};
  arrInformation.map((e) => {
    if (e.label.length < 1 && e.type_id === 1) {
      error[e.descript] = <FormattedMessage {...errors.requiredPhoneNumber} />;
    }

    if (e.label.length < 1 && e.type_id === 2) {
      error[e.descript] = <FormattedMessage {...errors.requiredEmail} />;
    }

    if (e.label.length < 1 && e.type_id === 3) {
      error[e.descript] = <FormattedMessage {...errors.requiredAddress} />;
    }

    if (e.label.length < 1 && e.type_id === 4) {
      error[e.descript] = <FormattedMessage {...errors.requiredAddressWeb} />;
    }

    if (e.label.length < 1 && e.type_id === 5) {
      error[e.descript] = <FormattedMessage {...errors.requiredLink} />;
    }

    if (e.label.length < 1 && e.type_id === 6) {
      error[e.descript] = <FormattedMessage {...errors.requiredFaceBook} />;
    }

    if (e.label.length < 1 && e.type_id === 7) {
      error[e.descript] = <FormattedMessage {...errors.requiredYoutube} />;
    }

    if (e.label.length < 1 && e.type_id === 8) {
      error[e.descript] = <FormattedMessage {...errors.requiredTiktok} />;
    }

    if (e.label.length < 1 && e.type_id === 9) {
      error[e.descript] = <FormattedMessage {...errors.requiredZalo} />;
    }

    if (e.value.length < 1 && e.type_id === 10) {
      error[e.descript] = <FormattedMessage {...errors.requiredNote} />;
    }

    if (e.label.length < 1 && e.type_id === 11) {
      error[e.descript] = <FormattedMessage {...errors.maxNote} />;
    }

    if (e.label.length < 1 && e.type_id === 12) {
      error[e.descript] = <FormattedMessage {...errors.requiredTwitter} />;
    }

    if (e.label.length < 1 && e.type_id === 13) {
      error[e.descript] = <FormattedMessage {...errors.requiredLinkedIn} />;
    }

    if (e.label.length < 1 && e.type_id === 14) {
      error[e.descript] = <FormattedMessage {...errors.requiredWhatsapp} />;
    }

    if (e.label.length < 1 && e.type_id === 15) {
      error[e.descript] = <FormattedMessage {...errors.requiredGithub} />;
    }

    if (e.label.length < 1 && e.type_id === 16) {
      error[e.descript] = <FormattedMessage {...errors.requiredTelegram} />;
    }

    if (e.label.length < 1 && e.type_id === 17) {
      error[e.descript] = <FormattedMessage {...errors.requiredSkype} />;
    }

    if (e.label.length > 255) {
      error[e.descript] = <FormattedMessage {...errors.maxTitle} />;
    }
    if (e.type_id !== 10 && e.value.length > 255) {
      error[e.descript] = <FormattedMessage {...errors.maxAbout} />;
    }
    if (e.type_id === 10 && e.value.length > 2000) {
      error[e.descript] = <FormattedMessage {...errors.maxNote} />;
    }
  });

  return _.isEmpty(error)
    ? responseSuccess('success')
    : responseError422(error);
};
