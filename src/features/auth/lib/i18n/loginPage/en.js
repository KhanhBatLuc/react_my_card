import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'without.account.question': 'Don’t have an account?',
  'without.account.get.started': 'Get started',
  'greeting': 'Hi, Welcome Back',
  'sign.in': 'Sign in to HiHello',
  'sign.in.details': 'Enter your details below.',
  'sign.in.or': 'OR',
  'login.form.email': 'Email address',
  'login.form.password': 'Password',
  'login.form.remember.me': 'Remember me',
  'login.form.forgot.password': 'Forgot password?',
  'login.form.login': 'Login',
  'login.form.errors.required.email': 'Email is required',
  'login.form.errors.valid.email':
    'Email must be a valid email address',
  'login.form.errors.max.email':
    'Must be 150 characters or less',
  'login.form.errors.required.password': 'Password is required',
  'login.form.errors.code.400': 'Email or password incorrect',
  'login.form.errors.code.600':
    'Network connection has error. Please check your network connection!',
};

export default prefixMessages(prefix, messages);
