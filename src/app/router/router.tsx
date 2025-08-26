import { createBrowserRouter } from 'react-router';
import { BaseLayout } from '../layout/base-layout';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <BaseLayout />,
      children: [],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
