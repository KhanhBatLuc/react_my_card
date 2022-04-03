import { memo } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useColorSelector } from 'src/lib/hook/colorHook';

const ButtonRoot = styled(Box)(({ theme }) => ({
  position: 'sticky',
  width: '100%',
  padding: '1rem 0',
  zIndex: 99,
  backgroundColor: '#ffffff',
  textAlign: 'center',
  bottom: 0,
  borderTop: ' 2px solid rgb(233, 233, 233)',
  boxShadow: theme.customShadows.z16,
  borderBottomLeftRadius: '0.625rem',
  borderBottomRightRadius: ' 0.625rem'
}));

function ButtonCreate({ onClick, text }) {
  const { colorActive } = useColorSelector();

  return (
    <ButtonRoot>
      <LoadingButton
        sx={{
          width: '90%',
          color: '#ffffff',
          backgroundColor: colorActive,
          transition: '.25s linear background-color',
          '&:hover': {
            backgroundColor: colorActive,
            boxShadow:
              '0px 0px 0px 0px rgb(100 116 139 / 70%), 0px 1px 2px rgb(100 116 139 / 39%)'
          }
        }}
        loading={false}
        onClick={onClick}
      >
        {text}
      </LoadingButton>
    </ButtonRoot>
  );
}

export default memo(ButtonCreate);
