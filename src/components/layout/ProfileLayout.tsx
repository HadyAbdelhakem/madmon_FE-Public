import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import SideList from '@/components/ui/SideList'; // Assuming you have the SideList component here
import LoggedInLayout from './LoggedInLayout';

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <LoggedInLayout>
      <Grid container justifyContent={{ xs: "center", sm: "flex-start" }}>
        {/* Sidebar - Full width on xs, 3/12 on sm and up */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          container
          justifyContent={{ xs: "center", sm: "flex-start" }} // Center sidebar on mobile
        >
          <SideList />
        </Grid>

        {/* Main Content */}
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          container
          justifyContent={{ xs: "center", sm: "flex-start" }} // Center main content on mobile
        >
          {children}
        </Grid>
      </Grid>
    </LoggedInLayout>
  );
};

export default ProfileLayout;
