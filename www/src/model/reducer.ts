import { createEmployee, getEmployeeList, setEmployeeStatus } from './actions'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEmployee } from 'common/interfaces/interface'

interface IInitialStateProps {
  employeeList: IEmployee[]
  loading: boolean
  employeeListError: string | null
  employeeFilter: string
  searchData: string
}

const initialState: IInitialStateProps = {
  employeeList: [],
  loading: false,
  employeeListError: null,
  employeeFilter: '',
  searchData: '',
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployeeFilter: (state, { payload }: PayloadAction<string>) => {
      state.employeeFilter = payload
    },
    setSearchData: (state, { payload }: PayloadAction<string>) => {
      state.searchData = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeeList.pending, (state: IInitialStateProps) => {
        state.loading = true
        state.employeeListError = null
      })
      .addCase(
        getEmployeeList.fulfilled,
        (state: IInitialStateProps, action: PayloadAction<IEmployee[]>) => {
          state.loading = false
          state.employeeList = action.payload
        },
      )
      .addCase(
        getEmployeeList.rejected,
        (state: IInitialStateProps, action) => {
          state.loading = false
          state.employeeListError =
            action.error.message || 'Failed to fetch data'
        },
      )
      .addCase(
        setEmployeeStatus.fulfilled,
        (state: IInitialStateProps, action: PayloadAction<IEmployee[]>) => {
          state.employeeList = action.payload
        },
      )
      .addCase(
        createEmployee.fulfilled,
        (state: IInitialStateProps, action: PayloadAction<IEmployee[]>) => {
          state.employeeList = action.payload
        },
      )
  },
})

export const { setEmployeeFilter, setSearchData } = employeeSlice.actions

export default employeeSlice.reducer
