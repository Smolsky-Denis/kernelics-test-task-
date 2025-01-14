import {
  selectEmployeeList,
  selectEmployeeListErrorError,
  selectGetEmployeeFilter,
  selectGetSearchData,
  selectLoading,
} from '../../../model/selectors'
import { StyledEmployeeListContainer } from './EmployeeList.styled'
import { IEmployee } from 'common/interfaces/interface'
import { Employee } from '../Employee/Employee'
import { FC, useEffect, useState } from 'react'
import { useAppSelector } from 'app/hooks'

export const EmployeeList: FC = () => {
  const loading = useAppSelector(selectLoading)
  const error = useAppSelector(selectEmployeeListErrorError)
  const searchData = useAppSelector(selectGetSearchData)
  const employeeFilter = useAppSelector(selectGetEmployeeFilter)
  const employeeList = useAppSelector(selectEmployeeList)

  const [filteredEmployeeList, setFilteredEmployeeList] =
    useState<IEmployee[]>(employeeList)

  useEffect(() => {
    if (employeeList.length === 0) {
      return
    }

    if (!searchData && !employeeFilter) {
      return setFilteredEmployeeList(employeeList)
    }

    const filteredEmployeeList = employeeList.filter((employee) => {
      const matchesName = searchData
        ? employee.name.toLowerCase().includes(searchData.toLowerCase())
        : true
      const matchesStatus = employeeFilter
        ? employee.status === employeeFilter
        : true
      return matchesName && matchesStatus
    })

    setFilteredEmployeeList(filteredEmployeeList)
  }, [employeeList, searchData, employeeFilter])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <StyledEmployeeListContainer>
      {filteredEmployeeList.map(({ id, name, img, status }) => (
        <Employee key={id} id={id} name={name} img={img} status={status} />
      ))}
    </StyledEmployeeListContainer>
  )
}
