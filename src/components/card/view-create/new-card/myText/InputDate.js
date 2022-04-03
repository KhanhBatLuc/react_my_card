import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function InputDate({ value, onChange }) {
  return (
    <TextField
      id="date"
      fullWidth
      margin="dense"
      value={value}
      onChange={onChange}
      variant="standard"
      type="date"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

InputDate.propTypes = {};
