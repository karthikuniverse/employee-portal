import React, { useEffect } from 'react'
import "./sidebar.css"
import PagePortion from '../pagePortion/PagePortion'
import img from '/profile.png'
import { Link, useLocation } from 'react-router'
import { ROUTES } from '../../constants/routesConstant'

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const toggler = document.querySelector(".sidebar-toggler");
    const sidebar = document.querySelector(".sidebar");
    const mainPage = document.querySelector(".main");
    const toggleSidebar = () => {
      sidebar?.classList.toggle("show-sidebar");
      mainPage?.classList.toggle("left-pd");
    };
    toggler?.addEventListener("click", toggleSidebar);
    return () => {
      toggler?.removeEventListener("click", toggleSidebar);
    };
  }, []);

  useEffect(() => {
    const sidebarLinks = document.querySelectorAll('.sidebar__list a');

    function linkColor(event: any) {
      sidebarLinks.forEach(link => link.classList.remove('active-link'));
      event.currentTarget.classList.add('active-link');
    }

    sidebarLinks.forEach(link => {
      link.addEventListener('click', linkColor);
    });

    // Cleanup to prevent memory leaks
    return () => {
      sidebarLinks.forEach(link => {
        link.removeEventListener('click', linkColor);
      });
    };
  }, []);

  return (
    <React.Fragment>

      {/* <!--=============== SIDEBAR ===============--> */}
      <nav className="sidebar" id="sidebar">
        <div className="sidebar__container">
          <div className="sidebar__user">
            <div>
              <div className="sidebar__img">
                <img src={img} alt="image" />
              </div>
            </div>

            <div className="sidebar__info">
              <div>
                <h3>karthikpandi</h3>
                <span>developer</span>
              </div>
            </div>
            <div className='sidebar-toggler'>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>

          <div className="sidebar__content">
            <div>
              <h3 className="sidebar__title">MANAGE</h3>

              <div className="sidebar__list">
                <Link to={ROUTES.DASHBOARD} className={`sidebar__link ${currentPath === ROUTES.DASHBOARD ? 'active-link' : ''}`}>
                  <i className="ri-pie-chart-2-fill"></i>
                  <span>Dashboard</span>
                </Link>

                <Link to={ROUTES.EMPLOYEE_MANAGEMENT} className={`sidebar__link ${currentPath === ROUTES.EMPLOYEE_MANAGEMENT ? 'active-link' : ''}`}>
                  <i className="ri-team-line"></i>
                  <span>Employee Management</span>
                </Link>

                <Link to={ROUTES.LEAVE} className={`sidebar__link ${currentPath.startsWith(ROUTES.LEAVE) ? 'active-link' : ''}`}>
                  <i className="ri-user-settings-line"></i>
                  <span>Leave</span>
                </Link>

                <Link to="#" className={`sidebar__link ${currentPath === '/attendance' ? 'active-link' : ''}`}>
                  <i className="ri-calendar-check-fill"></i>
                  <span>Attendance</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="sidebar__title">SETTINGS</h3>

              <div className="sidebar__list">
                <Link to="#" className={`sidebar__link ${currentPath === '/settings' ? 'active-link' : ''}`}>
                  <i className="ri-settings-3-fill"></i>
                  <span>Settings</span>
                </Link>

                <Link to="#" className={`sidebar__link ${currentPath === '/messages' ? 'active-link' : ''}`}>
                  <i className="ri-notification-2-fill"></i>
                  <span>Notifications</span>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="sidebar__actions">
            <button>
              <i className="ri-moon-clear-fill sidebar__link sidebar__theme" id="theme-button">
                <span>Theme</span>
              </i>
            </button>

            <button className="sidebar__link">
              <i className="ri-logout-box-r-fill"></i>
              <span>Log Out</span>
            </button>
          </div> */}
        </div>
      </nav>

      {/* <!--=============== MAIN ===============--> */}
      <main>
        <div className="main" id="main">
          <PagePortion />
        </div>
      </main>
    </React.Fragment>
  )
}

export default Sidebar