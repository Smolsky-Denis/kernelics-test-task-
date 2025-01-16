import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import TripOriginIcon from '@mui/icons-material/TripOrigin'
import { PALETTE } from 'common/constants/styles'
import styled, { css } from 'styled-components'

const imgStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const StyledContainer = styled('div')`
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: end;
  background-color: ${PALETTE.WHITE};
  box-shadow: 0px 4px 14px 2px ${PALETTE.WHITE_DARK};
  padding: 32px 28px 34px 28px;

  &:hover {
    box-shadow: 0px 10px 20px 5px ${PALETTE.BLUE_LIGHT};
    transition: 500ms;
  }
`

export const StyledImgContainer = styled('div')`
  width: 168px;
  height: 168px;
  position: relative;
  border-radius: 50%;
  background-color: ${PALETTE.BLUE};
  color: ${PALETTE.WHITE};
  overflow: hidden;
`

export const StyledPersonAddIcon = styled(PermIdentityIcon)`
  ${imgStyle}
`

export const StyledImg = styled('img')`
  ${imgStyle}
`

export const StyledName = styled('div')`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const StyledSelectContainer = styled('div')`
  min-width: 186px;
`

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
  max-width: 100px;
`
