import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { deleteCard } from 'src/lib/api/cardApi';
import { isSuccess, STATUS, isError } from 'src/lib/utils/statusChecker';

AlertConfirm.propTypes = {
  isOpenAlert: PropTypes.bool,
  onCloseAlert: PropTypes.func
};

export default function AlertConfirm({ isOpenAlert, onCloseAlert, cardId }) {
  const [status, setStatus] = useState(STATUS.init);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess(status)) {
      toast.success('Deleted success');
      setStatus(STATUS.init);
      return navigate('/dashboard/cards');
    }
    if (isError(status)) {
      toast.error('fail to delete');
    }
  }, [status]);

  const handleCloseAll = async () => {
    // call api delete Card
    try {
      await deleteCard(cardId);
      setStatus(STATUS.success);
    } catch (error) {
      setStatus(STATUS.error);
    }

    onCloseAlert();
  };
  return (
    <div>
      <Dialog open={isOpenAlert} onClose={onCloseAlert} sx={{ zIndex: 2004 }}>
        <DialogTitle id="alert-dialog-title">{'Confirm'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your cards?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onCloseAlert}>
            CANCEL
          </Button>
          <Button variant="contained" onClick={handleCloseAll} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
