import TripOriginIcon from '@mui/icons-material/TripOrigin'
import { TextField } from '@mui/material'
import styled from 'styled-components'

export const StyledRadioButton = styled(TripOriginIcon)`
  font-size: 14px;
`

export const StyledRadioButtonContainer = styled('div')`
  color: ${(props) => props.color};
`

export const StyledMenuItemContent = styled('div')`
  display: flex;
  justify-content: start;
  gap: 8px;
`

export const StyledForm = styled('div')`
  display: grid;
  grid-template-columns: 7fr 4fr;
  column-gap: 20px;
  row-gap: 10px;
  margin-top: 20px;
`

export const StyledTextField = styled(TextField)`
  height: 55px;
`

export const StyledButtonGroup = styled('div')`
  display: flex;
  justify-content: space-between;

  .MuiButtonBase-root {
    min-width:90px;
    height: 45px;
  }
`
