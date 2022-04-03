import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import PropTypes from 'prop-types';

DialogConfirm.propTypes = {
  isOpenDialogContact: PropTypes.bool,
  onCloseDialogContact: PropTypes.func,
  onCloseSidebarContact: PropTypes.func
};

export default function DialogConfirm({
  isOpenDialogContact,
  onCloseDialogContact,
  onCloseSidebarContact
}) {
  const handleCloseAll = () => {
    onCloseDialogContact();
    onCloseSidebarContact();
  };
  return (
    <div>
      <Dialog
        open={isOpenDialogContact}
        onClose={onCloseDialogContact}
        sx={{ zIndex: 2004 }}
      >
        <DialogTitle id="alert-dialog-title">{'Confirm'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to discard your changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onCloseDialogContact}>
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
