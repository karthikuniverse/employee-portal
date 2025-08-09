import React from 'react';
import { Outlet } from 'react-router';
import './auth.css'

const AuthLayout = () => {
  return (
    <React.Fragment>
      <div className='auth-layout'>
        <div>
          <Outlet />
        </div>
        <div>images</div>
      </div>
    </React.Fragment>
  )
}

export default AuthLayout