import { Box, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

function MyTextArea({
  currentColor,
  label,
  placeholder,
  defaultValue,
  value,
  onChange,
  error,
  helperText,
  name
}) {
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
    <Box className="box">
      <TextField
        margin="dense"
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        name={name}
        multiline
        fullWidth
        rows={4}
        InputProps={{
          style: {
            paddingBottom: '.25rem',
            paddingTop: '.5rem'
          }
        }}
        className={classes.root}
        variant="standard"
        error={error}
        helperText={helperText}
      />
    </Box>
  );
}

export default MyTextArea;
MyTextArea.propTypes = {
  label: PropTypes.object,
  currentColor: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string
};
