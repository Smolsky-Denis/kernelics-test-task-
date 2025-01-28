import TripOriginIcon from '@mui/icons-material/TripOrigin'
import { MEDIA } from 'common/constants/styles'
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

  @media (max-width: ${MEDIA.TABLET}) {
    grid-template-columns: 1fr;
  }
`

export const StyledTextField = styled(TextField)`
  height: 55px;

  @media (max-width: ${MEDIA.TABLET}) {
    height: auto;
  }
`

export const StyledButtonGroup = styled('div')`
  display: flex;
  justify-content: space-between;

  .MuiButtonBase-root {
    min-width: 90px;
    height: 45px;
  }

  @media (max-width: ${MEDIA.TABLET}) {
    margin-top: 10px;
  }
`
