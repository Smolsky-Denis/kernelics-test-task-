import {
  StyledContainer,
  StyledDivider,
  StyledFilter,
  StyledIconButton,
  StyledInput,
  StyledInputAdornment,
} from './Filter.styled'
import { ChangeEvent, FC, useDeferredValue, useEffect, useState } from 'react'
import { InputAdornment, MenuItem, SelectChangeEvent } from '@mui/material'
import { setEmployeeFilter, setSearchData } from 'model/reducer'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { SelectBox } from 'common/ui/SelectBox/SelectBox'
import { selectEmployeeFilter } from 'model/selectors'
import { Clear, Search } from '@mui/icons-material'
import { viewList } from 'common/constants/status'

export const Filter: FC = () => {
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)
  const employeeFilterValue = useAppSelector(selectEmployeeFilter)
  const dispatch = useAppDispatch()

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleClearSearch = () => {
    setSearch('')
  }

  const handleClearFilter = () => {
    dispatch(setEmployeeFilter(''))
  }

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    dispatch(setEmployeeFilter(e.target.value))
  }

  useEffect(() => {
    dispatch(setSearchData(deferredSearch.trim().toLowerCase()))
  }, [dispatch, deferredSearch])

  return (
    <StyledContainer>
      <StyledInput
        type="text"
        variant="outlined"
        placeholder="Type to search"
        value={deferredSearch}
        onChange={handleSearchChange}
        slotProps={{
          input: {
            startAdornment: (
              <StyledInputAdornment position="start">
                <Search />
              </StyledInputAdornment>
            ),
            endAdornment: deferredSearch && (
              <InputAdornment position="end">
                <StyledIconButton
                  aria-label="Reset"
                  onClick={handleClearSearch}
                >
                  <Clear />
                </StyledIconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <StyledDivider orientation="vertical" />
      <StyledFilter>
        <SelectBox
          value={employeeFilterValue}
          handleChange={handleSelectChange}
          label="Filter by status"
        >
          {viewList.map(({ value, title }) => (
            <MenuItem key={value} value={value}>
              {title}
            </MenuItem>
          ))}
        </SelectBox>
      </StyledFilter>
      <StyledIconButton
        disabled={!employeeFilterValue}
        aria-label="Reset"
        onClick={handleClearFilter}
      >
        {employeeFilterValue && <Clear />}
      </StyledIconButton>
    </StyledContainer>
  )
}
