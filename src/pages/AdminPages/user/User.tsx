import AppBreadcrumb, { type BreadcrumbItemType } from '@/atoms/ui/AppBreadCrumb/AppBreadCrumb'
import RHFSelect from '@/atoms/ui/Select/ReUseSelect';
import AccordionItem from '@/components/accordion/CustomAccordion';
import { Button } from '@/components/button/Button';
import { ROUTES } from '@/constants/routesConstant'
import React from 'react'
import { useForm } from 'react-hook-form';

const items: BreadcrumbItemType[] = [
  { label: "Admin Management", to: "#" },
  { label: "Users", to: ROUTES.ADMIN_USER }
];

interface FormFields {
  employeeName: string;
  userType: string;
  designation: string;
  projectTeam: string;
  deletedUsers: string;
  resignedUsers: string
}

const User = () => {

  const { control, handleSubmit, reset } = useForm<FormFields>({
    defaultValues: {
      deletedUsers: "",
      designation: "",
      employeeName: "",
      projectTeam: "",
      resignedUsers: "",
      userType: ""
    },
  });

  const onSubmit = (data: FormFields) => {
    console.log("Form Data:", data)
  }

  return (
    <React.Fragment>
      <AppBreadcrumb items={items} />

      {/* search section */}
      <AccordionItem title="Search">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3 gap-2.5'>
            <RHFSelect
              name="employeeName"
              control={control}
              placeholder="Select Employee Name *"
              options={[
                { value: "today", label: "Today" },
                { value: "week", label: "This Week" },
                { value: "month", label: "This Month" },
              ]}
              rules={{ required: "Employee name is required" }}
            />
            <RHFSelect
              name="userType"
              control={control}
              placeholder="Select User Type"
              options={[
                { value: "approved", label: "Approved" },
                { value: "pending", label: "Pending" },
                { value: "rejected", label: "Rejected" },
              ]}
            />
            <RHFSelect
              name="designation"
              control={control}
              placeholder="Select Designation"
              options={[
                { value: "approved", label: "Approved" },
                { value: "pending", label: "Pending" },
                { value: "rejected", label: "Rejected" },
              ]}
            />
            <RHFSelect
              name="projectTeam"
              control={control}
              placeholder="Select Designation"
              options={[
                { value: "approved", label: "Approved" },
                { value: "pending", label: "Pending" },
                { value: "rejected", label: "Rejected" },
              ]}
            />
            
          </div>
          <div className='flex justify-end items-center gap-2.5'>
            <Button type="button" onClick={() => reset()} className="px-4 py-2 bg-gray-500 text-white rounded">
              Reset
            </Button>
            <Button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Search
            </Button>
          </div>
        </form>
      </AccordionItem>
    </React.Fragment>
  )
}

export default User