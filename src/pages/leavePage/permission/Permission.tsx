import { DataTable } from '@/atoms/ui/DataTable/DataTable';
import RHFDatePicker from '@/atoms/ui/DatePicker/DatePickerbase';
import ReusableDialog from '@/atoms/ui/dialog/CustomDialog';
import RHFSelect from '@/atoms/ui/Select/ReUseSelect';
import AccordionItem from '@/components/accordion/CustomAccordion';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/breadcrumb/BreadCrumb'
import { Button } from '@/components/button/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ROUTES } from '@/constants/routesConstant';
import { type ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router'


export type User = {
  id: string;
  name: string;
  appliedDate: string
  appliedBy: string
  date: string
  fromTime: string
  hour: string
  approveDate: string
  approveBy: string
  comments: string
  status: string
  toTime: string
};

const users: User[] = [
  { id: "1", name: "John Doe", appliedDate: "2025-07-10", appliedBy: "Admin", date: "2025-07-10", fromTime: "04:00 PM", approveBy: "Manager A", approveDate: "2025-07-10", comments: "Medical leave", hour: "6.0", status: "Approved", toTime: "04:00 PM", },
  { id: "3", name: "karthik", appliedDate: "2025-07-10", appliedBy: "Admin", date: "2025-07-10", fromTime: "04:00 PM", approveBy: "Manager A", approveDate: "2025-07-10", comments: "Medical leave", hour: "6.0", status: "Approved", toTime: "04:00 PM", },
  { id: "2", name: "pandi", appliedDate: "2025-07-10", appliedBy: "Admin", date: "2025-07-10", fromTime: "04:00 PM", approveBy: "Manager A", approveDate: "2025-07-10", comments: "Medical leave", hour: "6.0", status: "Approved", toTime: "04:00 PM", },
  { id: "4", name: "pandi", appliedDate: "2025-07-10", appliedBy: "Admin", date: "2025-07-10", fromTime: "04:00 PM", approveBy: "Manager A", approveDate: "2025-07-10", comments: "Medical leave", hour: "6.0", status: "Approved", toTime: "04:00 PM", },
  { id: "5", name: "pandi", appliedDate: "2025-07-10", appliedBy: "Admin", date: "2025-07-10", fromTime: "04:00 PM", approveBy: "Manager A", approveDate: "2025-07-10", comments: "Medical leave", hour: "6.0", status: "Approved", toTime: "04:00 PM", },
];

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "appliedDate",
    header: "Applied Date",
  },
  {
    accessorKey: "appliedBy",
    header: "Applied BY",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "fromTime",
    header: "From Time",
  },
  {
    accessorKey: "toTime",
    header: "To Time",
  },
  {
    accessorKey: "hour",
    header: "Hour",
  },
  {
    accessorKey: "approveDate",
    header: "Approve Date",
  },
  {
    accessorKey: "approveBy",
    header: "Approved By",
  },
  {
    accessorKey: "comments",
    header: "Comments",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log("View", user)}>
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Edit", user)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Delete", user)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },

];



interface FormFields {
  period: string;
  status: string;
  from: any;
  to: any;
}

const Permission = () => {
  const { pathname } = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    userColumns
      .map(col => col.id ?? ("accessorKey" in col ? col.accessorKey : ""))
      .filter(key => key !== "")
  );
  const [tempVisibleColumns, setTempVisibleColumns] = useState<string[]>([]);


  const { control, handleSubmit, reset } = useForm<FormFields>({
    defaultValues: {
      period: "",
      status: "",
      from: "",
      to: "",
    },
  })

  const onSubmit = (data: FormFields) => {
    console.log("Form Data:", data)
  }

  const handleIconClick = () => {
    setTempVisibleColumns(visibleColumns);
    setIsDialogOpen(true)
  }

  function renderColumnHeader<T>(column: ColumnDef<T>): React.ReactNode {
    if (typeof column.header === "function") {
      // Cannot safely render it without context
      return null; // or a fallback
    }
    return column.header;
  }


  return (
    <React.Fragment>


      {/* trigger dialog */}
      <ReusableDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Permission List Configuration "
      >
        <React.Fragment>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setVisibleColumns(tempVisibleColumns);
              setIsDialogOpen(false);
            }}
          >
            <div className='grid grid-cols-3 gap-3'>
              {
                userColumns.map((data, index) => {
                  const checkboxId = `permission-${index}`;
                  const columnKey = data.id ?? ("accessorKey" in data ? data.accessorKey : `col-${index}`);
                  return (
                    <div key={data?.id || index} >
                      <div className="flex items-center gap-2 py-1">
                        <Checkbox id={checkboxId}
                          checked={tempVisibleColumns.includes(columnKey)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setTempVisibleColumns((curr) => [...curr, columnKey]);
                            } else {
                              setTempVisibleColumns((curr) => curr.filter(c => c !== columnKey));
                            }
                          }}
                        />
                        <label htmlFor={checkboxId} className="cursor-pointer">
                          {renderColumnHeader(data)}
                        </label>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className='flex justify-end items-center gap-2.5'>
              <Button onClick={() => setIsDialogOpen(false)} type="button" className="px-4 py-2 bg-gray-500 text-white rounded">
                Cancel
              </Button>
              <Button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save
              </Button>
            </div>
          </form>

        </React.Fragment>
      </ReusableDialog>

      {/* breadcrumb  */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="#">Permission Management</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="#" className={pathname === ROUTES.PERMISSIONS ? 'text-blue-400 font-semibold' : ''}>Permission</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* search section */}
      <AccordionItem title="Search">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3 gap-2.5'>
            <RHFSelect
              name="period"
              control={control}
              placeholder="Select Period *"
              options={[
                { value: "today", label: "Today" },
                { value: "week", label: "This Week" },
                { value: "month", label: "This Month" },
              ]}
              rules={{ required: "Period is required" }}
            />
            <RHFSelect
              name="status"
              control={control}
              placeholder="Select Status"
              options={[
                { value: "approved", label: "Approved" },
                { value: "pending", label: "Pending" },
                { value: "rejected", label: "Rejected" },
              ]}
            />
            <RHFDatePicker
              name="from"
              control={control}
              rules={{ required: "From Date is required" }}
              placeholder='From Date *'
            />
            <RHFDatePicker
              name="to"
              control={control}
              placeholder='To Date *'
              rules={{ required: "To Date is required" }}
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

      {/* table sections */}
      <div className='mt-3'>
        <DataTable
          columns={userColumns.filter(
            (col) => visibleColumns.includes(col.id ?? ("accessorKey" in col ? col.accessorKey as string : ""))
          )}
          data={users}
          handleIconClick={handleIconClick}
        />
      </div>

    </React.Fragment>
  )
}

export default Permission