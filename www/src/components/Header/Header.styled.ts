import { PALETTE } from 'common/constants/styles'
import styled from 'styled-components'
import { Button } from '@mui/material'

export const StyledHeader = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${PALETTE.WHITE};
  width: 100%;
  height: 84px;
  position: sticky;
  top: 0;
  z-index: 2;
`

export const StyledLogo = styled('span')`
  margin-left: 34px;
  font-size: 37px;
  font-weight: bold;
  color: ${PALETTE.BLUE};
`

export const StyledButton = styled(Button)`
  margin-right: 34px;
  min-width: 158px;
  height: 45px;
  font-size: 20px;
`
