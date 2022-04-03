import prefixMessages from 'src/lib/utils/prefixMessages';

import prefix from './prefix';

const messages = {
  'tag.name.register': 'Register',
  'notify.register': 'Already have an account?',
  'login': 'Login',
  'intro.app': 'Connect everybody',
  'title.privacy': 'Privacy Policy',
  'title.term': ' Terms of Service',
  'title.agree': 'By registering, I agree to Minimal',
  'title.has.account': 'Already have an account?',
  'register.form.email': 'Address Email',
  'register.form.password': 'Password',
  'register.form.confirm.password': 'Confirm Password',
  'register.form.errors.required.email': 'Email is required',
  'register.form.errors.valid.email':
    'Email must be a valid email address',
  'register.form.errors.required.password':
    'Password is required',
  'register.form.errors.required.confirm.password':
    'Password must match',
  'auth.login.page.login.form.errors.code.400': 'Email or password incorrect',
  'auth.login.page.login.form.errors.code.600':
    'Network connection has error. Please check your network connection!'
};

export default prefixMessages(prefix, messages);
