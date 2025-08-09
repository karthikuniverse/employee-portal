import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/breadcrumb/BreadCrumb";
import React from "react";
import { Link, useLocation } from "react-router"


export interface BreadcrumbItemType {
  label: string;  
  to?: string;   
}

interface AppBreadcrumbProps {
  items: BreadcrumbItemType[];
}

const AppBreadcrumb: React.FC<AppBreadcrumbProps>= ({ items })=> {
  const { pathname } = useLocation();

  console.log("pathname",pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to={item.to || "#"}
                  className={item.to != "#" ? "text-blue-400 font-semibold" : ""} 
                >
                  {item.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}


export default AppBreadcrumb;