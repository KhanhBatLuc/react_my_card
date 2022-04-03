import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  FormHelperText
} from '@mui/material';

import { isSuccess, isError, isRegistering } from 'src/lib/utils/statusChecker';

import i18n from '../lib/i18n';
import { useAuth, useAuthRegisterSelector } from '../lib/hook/authHook';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { status, error } = useAuthRegisterSelector();
  const { register } = useAuth();

  const { registerPage } = i18n.auth;
  const { registerForm } = registerPage;

  useEffect(() => {
    if (isSuccess(status)) {
      navigate('/notify-check-mail', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email(<FormattedMessage {...registerForm.errors.requiredEmail} />)
      .required(<FormattedMessage {...registerForm.errors.validEmail} />),
    password: Yup.string().required(
      <FormattedMessage {...registerForm.errors.requiredPassword} />
    ),
    passwordConfirmation: Yup.string()
      .required(
        <FormattedMessage {...registerForm.errors.requiredPassword} />
      )
      .oneOf(
        [Yup.ref('password'), null],
        <FormattedMessage {...registerForm.errors.requiredConfirmPassword} />
      )
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async ({ email, password }, { resetForm }) => {
      register(email, password);
      resetForm();
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  const getErrorMessage = (statusCode) => {
    const errorMessages = {
      400: <FormattedMessage {...registerForm.errors.code400} />,
      600: <FormattedMessage {...registerForm.errors.code600} />
    };
    return errorMessages[statusCode];
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type="email"
            label={<FormattedMessage {...registerForm.email} />}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label={<FormattedMessage {...registerForm.password} />}
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            fullWidth
            type={'password'}
            label={
              <FormattedMessage {...registerForm.confirmPassword} />
            }
            {...getFieldProps('passwordConfirmation')}
            error={Boolean(
              touched.passwordConfirmation && errors.passwordConfirmation
            )}
            helperText={
              touched.passwordConfirmation && errors.passwordConfirmation
            }
          />

          {isError(status) && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>
                {getErrorMessage(error.status_code)}
              </FormHelperText>
            </Box>
          )}

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isRegistering(status)}
          >
            <FormattedMessage {...registerPage.tagNameRegister} />
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
