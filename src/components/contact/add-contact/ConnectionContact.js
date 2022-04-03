import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
// material ui
import {
  Card,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Typography,
  MenuItem,
  Menu
} from '@mui/material';
// component
import SvgIconStyle from 'src/components/SvgIconStyle';
import { useState } from 'react';
// hook

function ConnectionContact() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 400 }}>
        <ListItem>
          <ListItemIcon>
            <SvgIconStyle src={'/static/icons/ic_hand.svg'} />
          </ListItemIcon>
          <ListItemText primary="Added January 6, 2022, 8:38 PM" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SvgIconStyle src={'/static/icons/ic_card.svg'} />
          </ListItemIcon>
          <ListItemText primary="sg is not associated with any of your cards" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SvgIconStyle src={'/static/icons/ic_live.svg'} />
          </ListItemIcon>
          <ListItemText primary="sg is not associated with any of your cards" />
        </ListItem>
      </List>
    </>
  );
}

export default ConnectionContact;
