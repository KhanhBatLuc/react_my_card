import { Box } from '@mui/material';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';

import { useColorSelector, useColor } from 'src/lib/hook/colorHook';

import { useCardAddSelector } from '../../../../features/card/card-adding/lib/hook/cardAddHook';

const BoxColor = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '285px'
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'center'
  }
}));

function ColorPicker() {
  const { changeColor } = useColor();
  const { listColor, colorActive } = useColorSelector();

  const { listItemCardWillCreate } = useCardAddSelector();
  const { color } = listItemCardWillCreate;

  const handleChangeColor = (currentColor) => {
    changeColor(currentColor);
  };

  useEffect(() => {
    if (color) {
      changeColor(color);
    }
  }, []);

  const checkActive = (currentColor) => {
    if (colorActive !== currentColor) return;
    return {
      boxShadow:
        'rgb(255 255 255) 0px 0px 0px 2px, rgb(0 0 0 / 38%) 0px 0px 0px 3px',
      transform: 'scale(1.5)'
    };
  };

  return (
    <BoxColor
      sx={{
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        overflow: 'scroll',
        overflowY: 'hidden',
        margin: '0 auto'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '4rem',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px 1rem'
        }}
      >
        {listColor?.map((e) => (
          <Box
            key={e.id}
            sx={{
              width: '1.25rem',
              height: '1.25rem',
              margin: '0.5rem',
              background: e.currentColor,
              borderRadius: '100%',
              cursor: 'pointer',
              transition: '.25s linear transform'
            }}
            style={checkActive(e.currentColor)}
            onClick={() => handleChangeColor(e.currentColor)}
          />
        ))}
      </Box>
    </BoxColor>
  );
}

export default ColorPicker;
