import TripOriginIcon from '@mui/icons-material/TripOrigin'
import { ListItemIcon, TextField } from '@mui/material'
import styled from 'styled-components'

export const StyledRadioButtonContainer = styled(ListItemIcon)`
  color: ${(props) => props.color};
`
export const StyledRadioButton = styled(TripOriginIcon)`
  font-size: small;
`
export const StyledForm = styled('div')`
  display: grid;
  grid-template-columns: 2.6fr 1.4fr;
  gap: 6%;
`
export const StyledTextField = styled(TextField)`
  height: 55px;
`
export const StyledButtonGroup = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 6%;
  .MuiButtonBase-root {
    width: 50%;
    height: 45px;
  }
`
