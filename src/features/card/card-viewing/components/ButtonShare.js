import { Icon } from '@iconify/react';
import styled from '@emotion/styled';
import { Box, Typography, Stack } from '@mui/material';
import { useState } from 'react';

//-------------------------------------------------------------------------

function ButtonGroup({ children, color }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        border: `2px solid ${color}`,
        borderRadius: '0.65rem',
        overflow: 'hidden'
      }}
    >
      {children}
    </Stack>
  );
}

//-------------------------------------------------------------------------

const RootStyle = styled(Box)((theme) => ({
  width: '100%',
  minHeight: '70px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',

  cursor: 'pointer'
}));
function ButtonItem({ nameTitle, iconName, sx, className, onClick }) {
  return (
    <RootStyle sx={{ ...sx }} style={className || {}} onClick={() => onClick()}>
      <Icon icon={iconName} style={{ fontSize: '24px', marginBottom: '.25rem' }} />
      <Typography variant="body2">{nameTitle}</Typography>
    </RootStyle>
  );
}

//-------------------------------------------------------------------------

const buttons = [
  { iconName: 'mdi:qrcode-scan', nameTitle: 'Code' },
  { iconName: 'mdi:email', nameTitle: 'Email' },
  { iconName: 'mdi:card-text-outline', nameTitle: 'Text' }
];

function ButtonShare(props) {
  const handleClick = (e) => {
    props.setActive(e);
  };
  const a = {
    backgroundColor: props.currentColor,
    transition: 'ease .5s background-color',
    color: '#ffffff'
  };
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <ButtonGroup color={props.currentColor}>
        {buttons?.map((e, index) => (
          <ButtonItem
            key={index}
            sx={{ color: props.currentColor, borderLeft: `1px solid ${props.currentColor}` }}
            iconName={e.iconName}
            nameTitle={e.nameTitle}
            onClick={() => handleClick(index)}
            className={props.active === index ? a : ''}
          />
        ))}
      </ButtonGroup>
    </Stack>
  );
}
export default ButtonShare;
