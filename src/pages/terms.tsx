import {MDXProvider} from '@mdx-js/react';
import {useRouter} from 'next/router';
import React from 'react';

import Terms from '../constants/terms.mdx'; // Adjust this path

const components = {
  // Any custom components you want to use within your MDX files.
};

const MDXPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center pt-36 z-40 min-h-screen text-primary-grey">
      <div className="max-w-xl backdrop-blur-sm  p-4 w-full">
        <MDXProvider components={components}>
          <Terms />
        </MDXProvider>
      </div>
    </div>
  );
};

export default MDXPage;
