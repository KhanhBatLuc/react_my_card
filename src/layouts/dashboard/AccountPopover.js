import _get from 'lodash/get';
import { Icon } from '@iconify/react';
import { alpha } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import homeFill from '@iconify/icons-eva/home-fill';
import { Link as RouterLink } from 'react-router-dom';
import personFill from '@iconify/icons-eva/person-fill';
import { useRef, useState, useEffect, useMemo } from 'react';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import {
  Button,
  Box,
  Divider,
  MenuItem,
  Typography,
  Avatar,
  IconButton
} from '@mui/material';

import i18n from 'src/lib/I18n/layoutPage/index';
import MenuPopover from '../../components/MenuPopover';

import {
  getLocalStorage,
  removeLocalStorage
} from 'src/lib/utils/myLocalStorage';
import { isSuccess } from 'src/lib/utils/statusChecker';
import {
  useAuth,
  useAuthLogoutSelector
} from 'src/features/auth/lib/hook/authHook';

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { logout } = useAuth();
  const account = getLocalStorage('auth');
  const { status } = useAuthLogoutSelector();

  const { sideBarMenuAccount } = i18n;

  const MENU_OPTIONS = useMemo(() => [
    {
      label: <FormattedMessage {...sideBarMenuAccount.home} />,
      icon: homeFill,
      linkTo: '/'
    },
    {
      label: <FormattedMessage {...sideBarMenuAccount.profile} />,
      icon: personFill,
      linkTo: '#'
    },
    {
      label: <FormattedMessage {...sideBarMenuAccount.settings} />,
      icon: settings2Fill,
      linkTo: '#'
    }
  ]);

  useEffect(() => {
    if (isSuccess(status)) {
      navigate('/login', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleLogout = () => {
    const auth = getLocalStorage('auth');
    if (_get(auth, 'token')) {
      logout(auth.token);
      removeLocalStorage('auth');
    } else {
      console.log('====================================');
      console.log(' Dont have token');
      console.log('====================================');
    }
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={() => setOpen(true)}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account?.user.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {account?.user.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account?.user.user_name}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={() => setOpen(false)}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
