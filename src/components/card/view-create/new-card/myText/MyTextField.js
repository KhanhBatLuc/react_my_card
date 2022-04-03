import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

function MyTextField(props, ref) {
  const { currentColor, label, ...rest } = props;

  const useStyles = makeStyles({
    root: {
      '& label.Mui-focused': {
        color: currentColor
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: ' #eaeaea'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: currentColor
      }
    }
  });
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      margin="dense"
      ref={ref}
      inputProps={{ style: { fontSize: '0.875rem' } }}
      label={label}
      name={rest?.name}
      value={rest?.value}
      onChange={rest?.onChange}
      variant="standard"
      className={classes.root}
      error={rest.error}
      helperText={rest.helperText}
    />
  );
}

export default forwardRef(MyTextField);
MyTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  currentColor: PropTypes.string.isRequired
};
