import { Box, IconButton, Typography } from '@mui/material';

import { useColorSelector } from 'src/lib/hook/colorHook';

function MyIconButton({ icon, title, id, defaultValue, placeholder, ...rest }) {
  const { colorActive } = useColorSelector();

  const handleClick = () => {
    return rest.onClick({ id, icon, title, defaultValue, placeholder });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        my: '1rem'
      }}
      onClick={handleClick}
    >
      <IconButton
        sx={{
          boxShadow: `0px 0px 4px 0px ${colorActive}`,
          transition: '.25s linear box-shadow'
        }}
        size="large"
      >
        {icon}
      </IconButton>
      <Typography
        variant="body2"
        align="center"
        sx={{ display: 'block', color: '#47494a', pt: '10px' }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default MyIconButton;
