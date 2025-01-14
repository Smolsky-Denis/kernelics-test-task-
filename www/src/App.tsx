import { CreateEmployee } from 'components/CreateEmployee/CreateEployee/CreateEmployee'
import { EmployeeList } from 'components/EmployeeList/EmployeeList/EmployeeList'
import { StyledBodyWrapper, StyledContainer } from 'App.styled'
import { Header } from 'components/Header/Header'
import { Filter } from 'components/Filter/Filter'
import { getEmployeeList } from 'model/actions'
import { useAppDispatch } from 'app/hooks'
import { useEffect } from 'react'

export function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getEmployeeList())
  }, [dispatch])

  return (
    <>
      <Header />
      <StyledBodyWrapper>
        <StyledContainer>
          <CreateEmployee />
          <Filter />
        </StyledContainer>
        <EmployeeList />
      </StyledBodyWrapper>
    </>
  )
}
