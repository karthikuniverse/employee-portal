import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/Main/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import { ROUTES } from "../constants/routesConstant";
import LeaveRoot from "../pages/leavePage/Root";
import Permission from "../pages/leavePage/permission/Permission";
import LeaveStatus from "@/pages/leavePage/leaveStatus/LeaveStatus";
import AdminRoot from "../pages/AdminPages/Root";
import User from "@/pages/AdminPages/user/User";




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
          { 
            path: ROUTES.ADMIN, element: <AdminRoot />,
            children : [
              {
                index : true,element : <User />
              }
            ] 

          },
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