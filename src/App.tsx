
import React from 'react';
import './App.css'
import router from './routes/index';
import { RouterProvider } from 'react-router';

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
