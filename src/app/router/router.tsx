import { createHashRouter } from 'react-router';
import { BaseLayout } from '../layout/base-layout';

export const router = createHashRouter([
  { path: '/', element: <BaseLayout /> },
  { path: '*', element: <div>Not found</div> },
]);
