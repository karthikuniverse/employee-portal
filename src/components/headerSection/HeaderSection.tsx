import React from 'react';
import './header.css'
import { useLocation } from 'react-router';
import { ROUTES } from '../../constants/routesConstant';

const HeaderSection = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const findTitleSection = () => {
    switch (currentPath) {
      case ROUTES.DASHBOARD:
        return 'Dashboard';
      case ROUTES.EMPLOYEE_MANAGEMENT:
        return 'Employee Management';
      case ROUTES.LEAVE:
        return 'Leave Management';
      case ROUTES.PERMISSIONS:
        return 'Permission Management';
      case ROUTES.LEAVE_STATUS:
        return 'Leave Status';
      case '/attendance':
        return 'Attendance';
      case '/settings':
        return 'Settings';
      case '/messages':
        return 'Notifications';
      default:
        return '';
    }
  };

  return (
    <React.Fragment>
      <div className='header_portion'>
        <div className='header_title'>{findTitleSection()}</div>
        <div>
          <i className="ri-logout-box-line"></i>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeaderSection