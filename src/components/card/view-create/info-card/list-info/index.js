import { Grid } from '@mui/material';
import React from 'react';

import MyIconButton from './MyIconButton';
import { useCardAddSelector } from '../../../../../features/card/card-adding/lib/hook/cardAddHook';

function ListInfo({ toggleDialog, toggleApp, setCardInfo }) {
  const { listCardGlobal } = useCardAddSelector();

  const handleClickIcon = (objItem) => {
    toggleDialog && toggleApp();
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth'
    });
    setCardInfo(objItem);
  };

  return (
    <Grid container>
      {listCardGlobal?.map((e) => (
        <Grid key={e.title} item lg={3} sm={4} md={3} xs={6}>
          <MyIconButton
            icon={e.icon}
            id={e.type_id}
            title={e.title}
            placeholder={e.placeholder}
            defaultValue={e.defaultValue}
            onClick={() => handleClickIcon(e)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(ListInfo);
