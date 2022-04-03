import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { makeStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { Draggable } from 'react-beautiful-dnd';
import { TextField, InputAdornment, Box, Stack } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';

import { MyTextArea, InputDefault } from '.';
import i18n from '../../../../../features/card/lib/i18n';

function InputInformation(props) {
  const { icon, defaultValue, currentColor, placeholder, ...rest } = props;
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

  const { labelInput } = i18n.cardAdd.CardAddingPage;

  const handleRemoveIcon = () => {
    rest.onRemove(rest.position);
  };

  const renderInput = () => {
    let inputChoose = {};

    switch (rest.id) {
      case 10:
        inputChoose = (
          <MyTextArea
            value={rest.value}
            onChange={rest.onChangeValue}
            currentColor={currentColor}
            label={<FormattedMessage {...labelInput.inputTextArea} />}
            error={rest.error}
            helperText={rest.helperText}
          />
        );
        break;
      default:
        inputChoose = (
          <InputDefault
            value={rest.value}
            onChange={rest.onChangeValue}
            currentColor={currentColor}
            placeholder={<FormattedMessage {...labelInput.inputDefault} />}
          />
        );
        break;
    }
    return inputChoose;
  };

  return (
    <Draggable
      key={rest.position}
      draggableId={String(rest.position)}
      index={rest.index}
    >
      {(provided) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginY: '2rem'
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Icon
            icon="ic:baseline-dehaze"
            style={{
              marginRight: '1rem',
              color: '#00000061',
              fontSize: '24px'
            }}
          />

          <Box sx={{ width: '100%' }} ref={rest.inputRef}>
            {rest.id === 1 || rest.id === 14 || rest.id === 16 ? (
              <Stack direction="row" alignItems="center">
                <InputAdornment position="start">{icon}</InputAdornment>
                <MuiPhoneNumber
                  fullWidth
                  margin="dense"
                  value={rest.label}
                  disableAreaCodes={true}
                  onChange={rest.onChangeLabel}
                  InputProps={{
                    style: {
                      paddingBottom: '.5rem'
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon
                          icon="mdi:close"
                          style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                          onClick={handleRemoveIcon}
                        />
                      </InputAdornment>
                    )
                  }}
                  placeholder={placeholder}
                  variant="standard"
                  className={classes.root}
                  error={rest.label.length === 0 ? rest.error : ''}
                  helperText={rest.label.length === 0 ? rest.helperText : ''}
                  defaultCountry={'vn'}
                />
              </Stack>
            ) : (
              <TextField
                fullWidth
                margin="dense"
                value={rest.label || defaultValue}
                onChange={rest.onChangeLabel}
                InputProps={{
                  style: {
                    paddingBottom: '.5rem'
                  },
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon
                        icon="mdi:close"
                        style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                        onClick={handleRemoveIcon}
                      />
                    </InputAdornment>
                  )
                }}
                placeholder={placeholder}
                variant="standard"
                className={classes.root}
                error={rest.label.length === 0 ? rest.error : false}
                helperText={rest.label.length === 0 ? rest.helperText : ''}
              />
            )}
            {renderInput()}
          </Box>
        </Box>
      )}
    </Draggable>
  );
}

export default InputInformation;
InputInformation.propTypes = {
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  currentColor: PropTypes.string,
  onRemove: PropTypes.func
};
