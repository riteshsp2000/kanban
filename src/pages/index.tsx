import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Select from '../components/shared/Select';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage src='../images/gatsby-astronaut.png' alt='gatsby astronaut' />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
    <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>

    <Select />
  </Layout>
);

export default IndexPage;
