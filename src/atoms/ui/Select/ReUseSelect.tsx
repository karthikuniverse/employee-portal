import { Controller } from "react-hook-form"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./Select"

interface RHFSelectProps {
  name: string
  control: any
  placeholder?: string
  options: { value: string; label: string }[]
  rules?: any
  className?: string
}

export default function RHFSelect({ name, control, placeholder, options, rules, className }: RHFSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={`flex flex-col gap-1 w-full ${className || ""}`}>
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className={`w-full ${fieldState.error ? "border-red-500 focus:ring-red-500" : ""}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.error && (
            <span className="text-red-500 text-xs">{fieldState.error.message}</span>
          )}
        </div>
      )}
    />
  )
}
