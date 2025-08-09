import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/Main/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import EmployeeManagement from "../pages/employeeManagement/EmployeeManagement";
import { ROUTES } from "../constants/routesConstant";
import LeaveRoot from "../pages/leavePage/Root";
import Permission from "../pages/leavePage/permission/Permission";
import LeaveStatus from "../pages/leavePage/leaveStatus/LeaveStatus";



const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       index: true,
  //       path: "/login",
  //       element: <Login />
  //     },
  //     {
  //       path: "/forgotpassword",
  //       element: <ForgotPassword />
  //     }
  //   ]
  // },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: ROUTES.DASHBOARD, element: <Dashboard /> },
          { path: ROUTES.EMPLOYEE_MANAGEMENT, element: <EmployeeManagement /> },
          {
            path: ROUTES.LEAVE, element: <LeaveRoot />,
            children: [
              { index: true, element: <Permission /> },
              { path: ROUTES.PERMISSIONS, element: <Permission /> },
              { path: ROUTES.LEAVE_STATUS, element: <LeaveStatus /> },
            ]
          },

        ]
      }
    ]
  }
])

export default router