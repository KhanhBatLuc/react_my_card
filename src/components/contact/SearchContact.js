// material
import { Box, Stack } from '@mui/material';
//component

import { useState } from 'react';
import { SearchCard } from '../card/view-home';
import { BackButton } from '../card/view-create';
import MenuSort from './MenuSort';
import SideBarContact from './SideBarContact';

function SearchContact() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent={'space-evenly'} marginBottom={'1rem'}>
        <BackButton />
        <Box sx={{ width: '80%' }}>
          <SearchCard onOpenSidebarContact={() => setOpen(true)} />
          <SideBarContact
            isOpenSidebarContact={open}
            onCloseSidebarContact={() => setOpen(false)}
          />
        </Box>
        <MenuSort />
      </Stack>
    </Box>
  );
}

export default SearchContact;
