import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import "./admin.css"
import { ROUTES } from '../../constants/routesConstant'

const AdminRoot = () => {
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
                    <Link to={ROUTES.ADMIN} className={(pathname === ROUTES.ADMIN || pathname === ROUTES.ADMIN_USER) ? 'active' : ''}>User</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.ADMIN_TEAM_ASSIGNMENT} className={pathname === ROUTES.ADMIN_TEAM_ASSIGNMENT ? 'active' : ''}>Team Assignment</Link>
                  </li>
                  <li>
                    <Link to="#">User Log</Link>
                  </li>
                  <li>
                    <Link to="#">Resolve Timesheet</Link>
                  </li>
                  <li>
                    <Link to="#">Compensation</Link>
                  </li>
                  <li>
                    <Link to="#">Earn Leave</Link>
                  </li>
                  <li>
                    <Link to="#">Attendance Consolidation</Link>
                  </li>
                  <li>
                    <Link to="#">Activity Log</Link>
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

export default AdminRoot