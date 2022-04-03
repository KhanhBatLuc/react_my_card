import { Icon } from '@iconify/react';

export const LANGS = [
  {
    value: 'en-US',
    label: 'English',
    icon: '/static/icons/ic_flag_en.svg'
  },
  {
    value: 'vi-VN',
    label: 'VietNam',
    icon: '/static/icons/ic_flag_vn.png'
  }
];

export const LOCALES = {
  english: 'en-US',
  vietnamese: 'vi-VN'
};

export const IMG_STATUS = [
  {
    img: '/static/illustrations/success.svg',
    text: 'Email verification success !'
  },
  {
    img: '/static/illustrations/error.svg',
    text: 'Email verification error !'
  }
];

export const LIST_ICON_INFORMATION = [
  {
    type_id: 1,
    icon: <Icon icon="mdi:phone" style={{ fontSize: '24px' }} />,
    descript: 'phone',
    defaultValue: '',
    placeholder: 'Số điện thoại',
    title: 'Phone'
  },
  {
    type_id: 2,
    icon: <Icon icon="mdi:email-outline" style={{ fontSize: '24px' }} />,
    descript: 'email',
    defaultValue: '',
    placeholder: ' Email',
    title: 'Email'
  },
  {
    type_id: 3,
    icon: <Icon icon="mdi:domain" style={{ fontSize: '24px' }} />,
    descript: 'address',
    defaultValue: '',
    placeholder: 'Địa chỉ',
    title: 'Address'
  },
  {
    type_id: 4,
    icon: <Icon icon="mdi:web" style={{ fontSize: '24px' }} />,
    descript: 'web',
    defaultValue: '',
    placeholder: 'www.mycard.vn',
    title: 'Website'
  },

  {
    type_id: 5,
    icon: <Icon icon="mdi:link-plus" style={{ fontSize: '24px' }} />,
    descript: 'link',
    defaultValue: '',
    placeholder: 'Link',
    title: 'Link'
  },
  {
    type_id: 6,
    icon: <Icon icon="mdi:facebook" style={{ fontSize: '24px' }} />,
    descript: 'facebook',
    defaultValue: 'https://facebook.com/',
    placeholder: 'https://facebook.com/mycard',
    title: 'FaceBook'
  },
  {
    type_id: 7,
    icon: <Icon icon="mdi:youtube" style={{ fontSize: '24px' }} />,
    descript: 'youtube',
    defaultValue: 'https://www.youtube.com/',
    placeholder: '',
    title: 'Youtube'
  },
  {
    type_id: 8,
    icon: <Icon icon="ic:sharp-tiktok" style={{ fontSize: '24px' }} />,
    descript: 'tiktok',
    defaultValue: 'https://www.tiktok.com/@',
    placeholder: '',
    title: 'TikTok'
  },
  {
    type_id: 9,
    icon: <Icon icon="simple-icons:zalo" style={{ fontSize: '24px' }} />,
    descript: 'zalo',
    defaultValue: 'https://zalo.me/',
    placeholder: '',
    title: 'Zalo'
  },
  {
    type_id: 10,
    icon: <Icon icon="mdi:note-edit-outline" style={{ fontSize: '24px' }} />,
    descript: 'note',
    defaultValue: '',
    placeholder: 'Tiêu đề (Không bắt buộc)',
    title: 'Notes'
  },
  {
    type_id: 11,
    icon: (
      <Icon
        icon="ant-design:twitter-circle-filled"
        style={{ fontSize: '24px' }}
      />
    ),
    descript: 'twitter',
    defaultValue: 'https://twitter.com/',
    placeholder: 'https://twitter.com/mycard',
    title: 'Twitter'
  },
  {
    type_id: 12,
    icon: (
      <Icon icon="akar-icons:instagram-fill" style={{ fontSize: '24px' }} />
    ),
    descript: 'instagram',
    defaultValue: 'https://www.instagram.com/',
    placeholder: 'https://www.instagram.com/mycard',
    title: 'Instagram'
  },
  {
    type_id: 13,
    icon: (
      <Icon icon="akar-icons:linkedin-box-fill" style={{ fontSize: '24px' }} />
    ),
    descript: 'linkedin',
    defaultValue: 'https://www.linkedin.com/in/',
    placeholder: 'https://www.linkedin.com/in/mycard',
    title: 'LinkedIn'
  },
  {
    type_id: 14,
    icon: <Icon icon="akar-icons:whatsapp-fill" style={{ fontSize: '24px' }} />,
    descript: 'whatsapp',
    defaultValue: '',
    placeholder: '',
    title: 'Whatsapp'
  },
  {
    type_id: 15,
    icon: <Icon icon="akar-icons:github-fill" style={{ fontSize: '24px' }} />,
    descript: 'github',
    defaultValue: 'https://github.com/',
    placeholder: '',
    title: 'Github'
  },
  {
    type_id: 16,
    icon: <Icon icon="akar-icons:telegram-fill" style={{ fontSize: '24px' }} />,
    descript: 'telegram',
    defaultValue: '',
    placeholder: '',
    title: 'Telegram'
  },
  {
    type_id: 17,
    icon: <Icon icon="ant-design:skype-filled" style={{ fontSize: '24px' }} />,
    descript: 'skype',
    defaultValue: '',
    placeholder: '',
    title: 'Skype'
  }
];

// component add card
export const dataPhoneItem = [
  {
    name: 'Home',
    value: 'home'
  },
  {
    name: 'Company',
    value: 'company'
  },
  {
    name: 'Works',
    value: 'work'
  }
];

export const dataEmailItem = [
  {
    name: 'Work',
    value: 'Work'
  },
  {
    name: 'Personal',
    value: 'Personal'
  }
];
