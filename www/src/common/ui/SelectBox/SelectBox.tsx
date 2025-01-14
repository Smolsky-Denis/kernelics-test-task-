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
  const labelRender = value
    ? null
    : label && <InputLabel shrink={false}>{label}</InputLabel>

  return (
    <FormControl variant={variant} fullWidth>
      {labelRender}
      <Select value={value} onChange={handleChange}>
        {children}
      </Select>
    </FormControl>
  )
}
