import { styled } from '@mui/material/styles';
// material ui
import { Card, Typography, Stack, Chip, Box } from '@mui/material';
// component

const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderRadius: '0.625rem',
  padding: '1rem',
  boxShadow: theme.customShadows.z24
}));

function TagsContact() {
  return (
    <>
      <Box sx={{ margin: '.25rem' }}>
        <Typography variant="body1" lineHeight={2}>
          Add one or more tags to 1231's card.
        </Typography>
        <Typography variant="body2" lineHeight={3} fontSize={14}>
          Tags are private—only you can see them.
        </Typography>
      </Box>
      <Stack direction="row" flexWrap="wrap">
        <Chip label="Clickable" variant="outlined" sx={{ margin: '.25rem' }} />
        <Chip label="Clickablessss" variant="outlined" sx={{ margin: '.25rem' }} />
        <Chip label="Clickable" variant="outlined" sx={{ margin: '.25rem' }} />
        <Chip label="Clickable q" variant="outlined" sx={{ margin: '.25rem' }} />
      </Stack>
    </>
  );
}

export default TagsContact;
