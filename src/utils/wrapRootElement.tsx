import React from 'react';

import { PageDetailsProvider } from '../store/contexts/PageDetailsProvider';
import { PageLayout } from '../components';

export const wrapRootElement = ({ element }) => (
  <PageDetailsProvider>
    <PageLayout>{element}</PageLayout>
  </PageDetailsProvider>
);
