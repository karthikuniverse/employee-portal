import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import './leave.css'
import { ROUTES } from '../../constants/routesConstant'

const LeaveRoot = () => {
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <div className='content_render'>
        <div className='header_Section'>
          <div className='top_bar'>
            <div className='right_border'>
              <div className='home_icon'>
                <i className="ri-home-wifi-line"></i>
              </div>
            </div>

            <div className='tab-container'>
              <nav>
                <ul className='tabs'>
                  <li>
                    <Link to={ROUTES.PERMISSIONS} className={(pathname === ROUTES.PERMISSIONS || pathname === ROUTES.LEAVE ) ? 'active' : ''}>Permission</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.LEAVE_STATUS} className={pathname === ROUTES.LEAVE_STATUS ? 'active' : ''}>Leave Status</Link>
                  </li>
                  <li>
                    <Link to="#">Add Entitlement</Link>
                  </li>
                  <li>
                    <Link to="#">Consolidated Leave</Link>
                  </li>
                  <li>
                    <Link to="#">Leave Calendar</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='leave_management_content'>
          <Outlet />
        </div>
      </div>

    </React.Fragment>
  )
}

export default LeaveRoot