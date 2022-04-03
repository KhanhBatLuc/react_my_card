import Router from './routes';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import I18Provider from 'src/lib/I18n/I18Provider';
import { useLocaleSelector } from 'src/lib/hook/localeHook';
import { useEffect } from 'react';

export default function App() {
  const { language } = useLocaleSelector();

  useEffect(() => {
    toast.configure({
      autoClose: 1000,
      draggable: true
    });
  }, []);

  return (
    <I18Provider locale={language.value}>
      <ThemeConfig>
        <GlobalStyles />
        <Router />
      </ThemeConfig>
      <ToastContainer closeButton={false} position="top-right" />
    </I18Provider>
  );
}
