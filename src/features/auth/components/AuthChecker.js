import { useEffect } from 'react';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { isSuccess } from 'src/lib/utils/statusChecker';
import { getLocalStorage } from 'src/lib/utils/myLocalStorage';

import { useAuth, useAuthLoginSelector } from '../lib/hook/authHook';

export default function AuthChecker({ children }) {
  const { status } = useAuthLoginSelector();
  const { loginFulfilled } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSuccess(status)) {
      const auth = getLocalStorage('auth');
      if (_get(auth, 'token')) {
        loginFulfilled(auth);
      } else {
        // TODO: Can be replaced this code by logout later!
        navigate('/login', { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return children;
}

AuthChecker.propTypes = {
  children: PropTypes.node
};
