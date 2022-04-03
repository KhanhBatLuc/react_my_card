import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PropTypes from 'prop-types';

function InputSelect({ label, dataItem, currentColor, value, onChange }) {
  return (
    <FormControl
      variant="standard"
      margin="dense"
      sx={{ width: '100%', zIndex: '2004' }}
    >
      <InputLabel
        style={{
          color: currentColor
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        sx={{
          '&:before': {
            borderColor: currentColor
          },
          '&:after': {
            borderColor: currentColor
          }
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dataItem?.map((e) => (
          <MenuItem key={e.value} value={e.value}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputSelect;
InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  dataItem: PropTypes.array.isRequired
};
