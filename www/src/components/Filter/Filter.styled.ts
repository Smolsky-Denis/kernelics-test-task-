import { Divider, IconButton, InputAdornment, TextField } from '@mui/material'
import { PALETTE } from 'common/constants/styles'
import styled from 'styled-components'

export const StyledContainer = styled('div')`
  width: 100%;
  background: ${PALETTE.WHITE};
  display: flex;
  align-items: center;
  border: none;
  border-radius: 6px;
  overflow: hidden;

  & .MuiInputBase-root,
  .MuiFormLabel-root,
  .MuiFormLabel-root.Mui-focused {
    font-size: 20px;
  }

  & .MuiInputBase-root input::placeholder,
  .MuiFormLabel-root,
  .MuiFormLabel-root.Mui-focused {
    color: ${PALETTE.GREY};
    opacity: 1;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`

export const StyledInput = styled(TextField)`
  width: 90%;
`

export const StyledInputAdornment = styled(InputAdornment)`
  color: ${PALETTE.GREY_LIGHT};

  .MuiSvgIcon-fontSizeMedium {
    font-size: 28px;
    margin-left: 17px;
    margin-right: 12px;
  }
`

export const StyledDivider = styled(Divider)`
  height: 30px;
  margin-right: 50px;
  background-color: none;
`

export const StyledFilter = styled('div')`
  width: 20%;

  .MuiInput-root {
    font-size: 20px;
  }
  .MuiInputLabel-root {
    font-size: 20px;
  }
  .MuiSvgIcon-root {
    font-size: 40px;
  }
`

export const StyledIconButton = styled(IconButton)`
  margin-right: 15px;
  width: 10px;

  &:hover {
    background: none;
    opacity: 0.7;
  }
`
