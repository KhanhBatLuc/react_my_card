import { Link as RouterLink, useNavigate } from 'react-router-dom';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { FormattedMessage } from 'react-intl';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import {
  Box,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormHelperText
} from '@mui/material';

import { isLoggingIn, isSuccess, isError } from 'src/lib/utils/statusChecker';

import i18n from '../lib/i18n';
import { useAuth, useAuthLoginSelector } from '../lib/hook/authHook';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { status, error } = useAuthLoginSelector();
  const { login } = useAuth();

  useEffect(() => {
    if (isSuccess(status)) {
      navigate('/dashboard', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const { loginForm } = i18n.auth.loginPage;

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required(<FormattedMessage {...loginForm.errors.requiredEmail} />)
      .email(<FormattedMessage {...loginForm.errors.validEmail} />)
      .max(150, <FormattedMessage {...loginForm.errors.maxEmail} />),
    password: Yup.string().required(
      <FormattedMessage {...loginForm.errors.requiredPassword} />
    )
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async ({ email, password }, action) => {
      login(email, password);
    }
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const getErrorMessage = (statusCode) => {
    const errorMessages = {
      400: <FormattedMessage {...loginForm.errors.code400} />,
      600: <FormattedMessage {...loginForm.errors.code600} />
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
            label={<FormattedMessage {...loginForm.email} />}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label={<FormattedMessage {...loginForm.password} />}
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        {isError(status) && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>
              {getErrorMessage(error.status_code)}
            </FormHelperText>
          </Box>
        )}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps('remember')}
                checked={values.remember}
              />
            }
            label={<FormattedMessage {...loginForm.rememberMe} />}
          />
          <Link component={RouterLink} variant="subtitle2" to="#">
            <FormattedMessage {...loginForm.forgotPassword} />
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isLoggingIn(status)}
        >
          <FormattedMessage {...loginForm.login} />
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
