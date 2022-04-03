import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

export default function InputDefault({
  currentColor,
  value,
  onChange,
  placeholder
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
    <TextField
      fullWidth
      margin="dense"
      value={value}
      onChange={onChange}
      InputProps={{
        style: {
          paddingBottom: '.25rem',
          paddingTop: '.5rem'
        }
      }}
      label={placeholder}
      variant="standard"
      className={classes.root}
    />
  );
}
