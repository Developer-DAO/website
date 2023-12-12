import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Privacy from '../constants/privacy.mdx'; // Adjust this path
import styles from '../styles/markdown.module.scss';

const components = {
  // Any custom components you want to use within your MDX files.
};

const MDXPage: React.FC = () => {
  return (
    <div className="flex justify-center pt-36 z-40 min-h-screen text-primary-grey">
      <div className="max-w-xl backdrop-blur-sm p-4 pb-20 w-full">
        <MDXProvider components={components}>
        <div className={styles.markdownContainer}>

          <Privacy />
        </div>
        </MDXProvider>
      </div>
    </div>
  );
};

export default MDXPage;
