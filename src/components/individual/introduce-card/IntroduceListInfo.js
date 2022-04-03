import PropTypes from 'prop-types';
import {
  Link,
  List,
  Stack,
  Avatar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Icon } from '@iconify/react';

import { LIST_ICON_INFORMATION } from 'src/lib/utils/constants';
import { cutString, checkLengthString } from 'src/lib/utils/checkString';

IntroduceListInfo.propTypes = {
  listInformation: PropTypes.array,
  color: PropTypes.string
};

function ItemText(string, up) {
  return (
    <Stack direction="row" justifyContent="space-around">
      <Typography variant="body2" color="#637381" sx={{ width: '90%' }}>
        {!up ? cutString(string, 100) : string}
      </Typography>
      {checkLengthString(string, 100) ? (
        <Icon
          icon="eva:arrow-ios-downward-fill"
          rotate={up && 2}
          style={{ fontSize: '20px' }}
        />
      ) : (
        ''
      )}
    </Stack>
  );
}

function IntroduceListInfo(props) {
  const { listInformation, color } = props;

  const [up, setUp] = useState(false);

  const handleUp = () => {
    setUp(!up);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav">
      {listInformation?.map((item) => {
        if (item.type_id === 10) {
          return (
            <ListItemButton sx={{ paddingLeft: '1.5rem' }} onClick={handleUp}>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: color }}>
                  {LIST_ICON_INFORMATION[item.type_id - 1].icon}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                secondary={ItemText(item.value, up)}
              />
            </ListItemButton>
          );
        } else {
          return (
            <Link
              href={item.label}
              key={item.id}
              underline="none"
              color="inherit"
              target="_blank"
            >
              <ListItemButton sx={{ paddingLeft: '1.5rem' }}>
                <ListItemIcon>
                  <Avatar sx={{ bgcolor: color }}>
                    {LIST_ICON_INFORMATION[item.type_id - 1].icon}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={item.value}
                  secondary={cutString(item.label, 40)}
                />
              </ListItemButton>
            </Link>
          );
        }
      })}
    </List>
  );
}

export default IntroduceListInfo;
