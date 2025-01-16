import { MEDIA } from 'common/constants/styles'
import styled from 'styled-components'

export const StyledBodyWrapper = styled('div')`
  padding: 0 36px;
  margin: auto;
  max-width: 1430px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledContainer = styled('div')`
  margin-top: 45px;
  display: flex;
  width: 100%;
  gap: 10px;

  @media (min-width: ${MEDIA.MOBILE}) {
    flex-direction: column-reverse;
  }

  @media (min-width: ${MEDIA.TABLET}) {
    flex-direction: row;
  }
`
