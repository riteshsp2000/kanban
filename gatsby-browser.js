/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import './src/styles/GlobalStyles.css';

import { PageDetailsProvider } from './src/store/contexts/PageDetailsProvider';

export const wrapRootElement = ({ element }) => (
  <PageDetailsProvider>{element}</PageDetailsProvider>
);
