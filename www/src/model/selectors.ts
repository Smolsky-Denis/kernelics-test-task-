import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

const selectEmployeeData = (state: RootState) => state.employee

export const selectEmployeeList = createSelector(
  selectEmployeeData,
  ({ employeeList }) => employeeList,
)

export const selectLoading = createSelector(
  selectEmployeeData,
  ({ loading }) => {
    return loading
  },
)

export const selectEmployeeListErrorError = createSelector(
  selectEmployeeData,
  ({ employeeListError }) => {
    return employeeListError
  },
)

export const selectEmployeeFilter = createSelector(
  selectEmployeeData,
  ({ employeeFilter }) => {
    return employeeFilter
  },
)

export const selectSearchData = createSelector(
  selectEmployeeData,
  ({ searchData }) => {
    return searchData
  },
)
