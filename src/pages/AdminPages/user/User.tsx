import AppBreadcrumb, { type BreadcrumbItemType } from '@/atoms/ui/AppBreadCrumb/AppBreadCrumb'
import { ROUTES } from '@/constants/routesConstant'
import React from 'react'

const items: BreadcrumbItemType[] = [
  { label: "Admin Management", to: "#" },
  { label: "Users", to: ROUTES.ADMIN_USER }
];

const User = () => {
  return (
    <React.Fragment>
       <AppBreadcrumb items={items} />
    </React.Fragment>
  )
}

export default User