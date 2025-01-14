import { StyledButton, StyledHeader, StyledLogo } from './Header.styled'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>Employees</StyledLogo>
      <StyledButton variant="outlined">Log Out</StyledButton>
    </StyledHeader>
  )
}
