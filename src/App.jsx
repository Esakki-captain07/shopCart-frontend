import React from 'react';
import AppRouter from './utils/AppRouter.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter(AppRouter);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
