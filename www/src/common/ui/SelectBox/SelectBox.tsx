import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  SelectVariants,
} from '@mui/material'
import { ReactNode } from 'react'

interface ISelectBoxProps {
  value: string
  handleChange: (e: SelectChangeEvent<string>) => void
  children: ReactNode
  label?: string
  variant?: SelectVariants
}

export function SelectBox({
  value,
  handleChange,
  children,
  label,
  variant,
}: ISelectBoxProps) {
  const hasLabel = !value && label

  return (
    <FormControl variant={variant} fullWidth>
      {hasLabel && <InputLabel shrink={false}>{label}</InputLabel>}
      <Select value={value} onChange={handleChange}>
        {children}
      </Select>
    </FormControl>
  )
}
