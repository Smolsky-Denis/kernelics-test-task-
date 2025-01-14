import {
  selectEmployeeList,
  selectGetEmployeeFilter,
  selectGetSearchData,
} from 'model/selectors'
import { IEmployee } from 'common/interfaces/interface'
import { useAppSelector } from 'app/hooks'
import { useMemo } from 'react'

export const useGetEmployeeList = (): IEmployee[] => {
  const searchData = useAppSelector(selectGetSearchData)
  const employeeFilter = useAppSelector(selectGetEmployeeFilter)
  const employeeList = useAppSelector(selectEmployeeList)

  const filteredEmployeeList = useMemo(() => {
    if (searchData && !employeeFilter) {
      return employeeList.filter((employee) => {
        return employee.name.toLowerCase().indexOf(searchData) !== -1
      })
    }

    if (!searchData && employeeFilter) {
      return employeeList.filter((employee) => {
        return employee.status === employeeFilter
      })
    }

    if (searchData && employeeFilter) {
      return employeeList.filter((employee) => {
        return (
          employee.status === employeeFilter &&
          employee.name.toLowerCase().indexOf(searchData) !== -1
        )
      })
    }

    return employeeList
  }, [searchData, employeeFilter, employeeList])

  return filteredEmployeeList
}
