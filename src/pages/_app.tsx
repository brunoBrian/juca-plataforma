import React from 'react';
import { setConfiguration } from 'react-grid-system';

import { globalStyles } from '@styles/global';
import { AuthProvider } from 'context';

globalStyles();
setConfiguration({ gutterWidth: 16, maxScreenClass: 'xl' });

function MyApp({ Component, pageProps }) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment;

  return (
    <AuthProvider>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </AuthProvider>
  );
}

export default MyApp;
