import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import VerifyEmail from 'src/features/auth/components/VerifyEmail';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardLayout from './layouts/dashboard/Dashboard';
import LoginPage from './features/auth/components/LoginPage';
import Register from './features/auth/components/RegisterPage';
import PageNotifyEmail from './pages/PageNotifyEmail';
import CardFeature from './features/card/CardFeature';
import DetailContact from './pages/DetailContact';
import ViewContact from './pages/ViewContact';
import CardPublicPage from './features/card/card-publishing/component/CardPublicPage';
import Contact from './pages/Contact';
import Setting from './pages/Setting';
import NotFound from './pages/Page404';
import User from './pages/User';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/cards" replace /> },
        { path: 'cards/*', element: <CardFeature /> },
        { path: 'app', element: <User /> },
        { path: 'setting', element: <Setting /> },
        { path: 'contact', element: <Contact /> },
        { path: 'contact/view', element: <ViewContact /> },
        { path: 'contact/:param', element: <DetailContact /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <Register /> },
        { path: 'public/:uuid', element: <CardPublicPage /> },
        { path: 'notify-check-mail', element: <PageNotifyEmail /> },
        { path: 'register/:token', element: <VerifyEmail /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
