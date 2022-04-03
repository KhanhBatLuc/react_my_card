import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AuthChecker from 'src/features/auth/components/AuthChecker';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { RootStyle, MainStyle } from './Dashboard.style';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  return (
    <RootStyle>
      <AuthChecker>
        <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
        <DashboardSidebar
          isOpenSidebar={open}
          onCloseSidebar={() => setOpen(false)}
        />
        <MainStyle>
          <Outlet />
        </MainStyle>
      </AuthChecker>
    </RootStyle>
  );
}
