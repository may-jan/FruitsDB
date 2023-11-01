import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import List from './components/List';
import ListInfo from './components/ListInfo';
import AddForm from './components/AddForm';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: 'Not Found',
      children: [
        { index: true, element: <Home /> },
        { path: '/list', element: <List /> },
        { path: '/list/:infoId', element: <ListInfo /> },
        { path: '/addform', element: <AddForm /> },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
