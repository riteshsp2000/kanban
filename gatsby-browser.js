/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import './src/styles/GlobalStyles.css';

import { PageDetailsProvider } from './src/store/contexts/PageDetailsProvider';
import { PageLayout } from './src/components';

export const wrapRootElement = ({ element }) => (
  <PageDetailsProvider>
    <PageLayout>{element}</PageLayout>
  </PageDetailsProvider>
);
