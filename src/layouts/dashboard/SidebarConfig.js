import { Icon } from '@iconify/react';
import { FormattedMessage } from 'react-intl';
import peopleFill from '@iconify/icons-eva/people-fill';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';

import i18n from 'src/lib/I18n/layoutPage/index';
// import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
// import fileTextFill from '@iconify/icons-eva/file-text-fill';
// import lockFill from '@iconify/icons-eva/lock-fill';
// import personAddFill from '@iconify/icons-eva/person-add-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const { navBarMenu } = i18n;

const sidebarConfig = [
  {
    title: <FormattedMessage {...navBarMenu.dashboard} />,
    path: '/dashboard/cards',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: <FormattedMessage {...navBarMenu.contact} />,
    path: '/dashboard/contact',
    icon: getIcon(peopleFill)
  }
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill)
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
