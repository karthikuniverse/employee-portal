import { Controller } from "react-hook-form"
import { CalendarIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import React from "react"
import { Button } from "@/components/button/Button"
import { Calendar } from "../calendar/BaseCalendar"
import { Input } from "@/components/ui/input"

function formatDate(date?: Date) {
  if (!date) return ""
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date?: Date) {
  return !!date && !isNaN(date.getTime())
}

interface RHFDatePickerProps {
  name: string
  control: any
  label?: string
  placeholder?: string
  rules?: any
}

export default function RHFDatePicker({ name, control, label, placeholder, rules }: RHFDatePickerProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const [open, setOpen] = React.useState(false)
        const [month, setMonth] = React.useState<Date | undefined>(
          field.value ? new Date(field.value) : undefined
        )
        const [inputValue, setInputValue] = React.useState(formatDate(field.value))

        return (
          <div className="flex flex-col gap-1 w-full"> 
            {label && <Label className="px-1">{label}</Label>}

            <div className="relative flex gap-2">
              <Input
                value={inputValue}
                placeholder={placeholder || "Select date *"}
                className={`bg-background pr-10 ${fieldState.error ? "border-red-500 focus:ring-red-500" : ""}`}
                onChange={(e) => {
                  const date = new Date(e.target.value)
                  setInputValue(e.target.value)
                  if (isValidDate(date)) {
                    field.onChange(date)
                    setMonth(date)
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault()
                    setOpen(true)
                  }
                }}
              />

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(date) => {
                      field.onChange(date)
                      setInputValue(formatDate(date))
                      setOpen(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {fieldState.error && (
              <span className="text-red-500 text-xs">{fieldState.error.message}</span>
            )}
          </div>
        )
      }}
    />
  )
}
