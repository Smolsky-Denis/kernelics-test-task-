import { StyledAddIcon, StyledButton } from './CreateEmployee.styled'
import { ModalWindow } from '../ModalWindow/ModalWindow'
import { useState } from 'react'

export const CreateEmployee = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <StyledButton variant="contained" onClick={handleOpen}>
        <span>Create</span> 
        <StyledAddIcon />
      </StyledButton>
      <ModalWindow isOpen={isOpen} handleClose={handleClose} />
    </>
  )
}
