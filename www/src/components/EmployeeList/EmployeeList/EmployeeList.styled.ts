import { MEDIA } from 'common/constants/styles'
import styled from 'styled-components'

export const StyledEmployeeListContainer = styled('div')`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: minmax(280px, 1fr);
  margin-top: 20px;
  gap: 10px;

  @media (min-width: ${MEDIA.TABLET}) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    margin-top: 84px;
    gap: 48px 34px;
  }

  @media (min-width: ${MEDIA.LAPTOP}) {
    grid-template-columns: repeat(3, minmax(410px, 1fr));
    margin-top: 104px;
    gap: 68px 54px;
  }
`
