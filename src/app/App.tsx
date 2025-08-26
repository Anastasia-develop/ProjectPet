import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export const App = () => {
  return (
    // <StrictMode>
    <RouterProvider router={router} />
    // </StrictMode>
  );
};
