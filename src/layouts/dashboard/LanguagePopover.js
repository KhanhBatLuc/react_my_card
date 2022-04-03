import { useRef, useState } from 'react';
import { alpha } from '@mui/material/styles';
import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material';

import MenuPopover from '../../components/MenuPopover';

import { LANGS } from 'src/lib/utils/constants';
import { useLocale } from 'src/lib/hook/localeHook';
import { useLocaleSelector } from 'src/lib/hook/localeHook';

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { language } = useLocaleSelector();

  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const { changeLanguage } = useLocale();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeLanguage = (option) => {
    setSelectedLanguage(option);
    // dispatch action change language
    changeLanguage(option);
    // close tab
    handleClose();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              )
          })
        }}
      >
        <img src={selectedLanguage.icon} alt={selectedLanguage.label} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === selectedLanguage}
              onClick={() => handleChangeLanguage(option)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}
