import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import TripOriginIcon from '@mui/icons-material/TripOrigin'
import { PALETTE } from 'common/constants/styles'
import styled from 'styled-components'

export const StyledContainer = styled('div')`
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: end;
  height: 204px;
  margin-bottom: 32px;
  background-color: ${PALETTE.WHITE};
  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 30px;

  &:hover {
    box-shadow: 0px 10px 20px 5px ${PALETTE.BLUE_LIGHT};
    transition: 500ms;
  }
`

export const StyledImgContainer = styled('div')`
  width: 165px;
  height: 165px;
  position: relative;
  border-radius: 50%;
  background-color: ${PALETTE.BLUE};
  color: ${PALETTE.WHITE};
  overflow: hidden;
`

export const StyledPersonAddIcon = styled(PermIdentityIcon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const StyledImg = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const StyledName = styled('div')`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 12px;
`

export const StyledSelectContainer = styled('div')`
  min-width: 186px;
`

export const StyledRadioButton = styled(TripOriginIcon)`
  font-size: small;
`

export const StyledRadioButtonContainer = styled('div')`
  color: ${(props) => props.color};
`

export const StyledMenuItemContent = styled('div')`
  margin-right: 5px;
  display: flex;
  justify-content: start;
  gap: 15px;
`
