import {
  StyledButtonGroup,
  StyledForm,
  StyledRadioButton,
  StyledTextField,
  StyledRadioButtonContainer,
} from './ModalWindow.styled'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { statusTypes, TStatusType, viewList } from 'common/constants/constants'
import { ChangeEvent, useDeferredValue, useEffect, useState } from 'react'
import { isValidComplexUrl } from 'common/utils/validateComplexUrl'
import { SelectBox } from 'common/ui/SelectBox/SelectBox'
import { ERROR } from 'common/constants/validation'
import { createEmployee } from 'model/actions'
import { useAppDispatch } from 'app/hooks'

interface IModalWindow {
  isOpen: boolean
  handleClose: () => void
}
export const ModalWindow = ({ isOpen, handleClose }: IModalWindow) => {
  const dispatch = useAppDispatch()
  const [status, setStatus] = useState(statusTypes.Working)
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorImg, setErrorImg] = useState('')
  const deferredName = useDeferredValue(name)
  const deferredImg = useDeferredValue(img)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setErrorName('')
  }

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.value)
    setErrorImg('')
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value as TStatusType)
  }

  const handleValidate = ({ img, name }: Record<string, string>) => {
    let errorImg
    let errorName

    if (!img) {
      errorImg = ERROR.REQUIRED
      setErrorImg(errorImg)
    }

    if (!isValidComplexUrl(img)) {
      errorImg = ERROR.IMG
      setErrorImg(errorImg)
    }

    if (!name) {
      errorName = ERROR.REQUIRED
      setErrorName(errorName)
    }

    return {
      errorName,
      errorImg,
    }
  }

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = deferredName.trim()
    const img = deferredImg.trim()

    const { errorImg, errorName } = handleValidate({ name, img })

    if (errorImg || errorName) {
      return
    }

    const body = {
      name,
      status: status as TStatusType,
      img,
    }
    dispatch(createEmployee(body))
    handleClose()
  }

  const cleanWindow = () => {
    setName('')
    setImg('')
    setErrorName('')
    setErrorImg('')
  }

  useEffect(() => {
    return cleanWindow()
  }, [isOpen])

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleCreate,
      }}
    >
      <DialogTitle>Create</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create a new worker on this site, enter the worker's name, current
          status and photo link.
        </DialogContentText>
        <StyledForm>
          <StyledTextField
            autoFocus
            placeholder="Full name"
            error={!!errorName}
            helperText={errorName}
            type="text"
            fullWidth
            variant="standard"
            value={deferredName}
            onChange={handleNameChange}
          />
          <SelectBox
            value={status}
            handleChange={handleSelectChange}
            variant="standard"
          >
            {viewList.map(({ value, title, color }) => {
              return (
                <MenuItem key={value} value={value}>
                  <StyledRadioButtonContainer color={color}>
                    <StyledRadioButton />
                  </StyledRadioButtonContainer>
                  {title}
                </MenuItem>
              )
            })}
          </SelectBox>
          <StyledTextField
            placeholder="Link to photo"
            error={!!errorImg}
            helperText={errorImg}
            type="text"
            fullWidth
            variant="standard"
            value={deferredImg}
            onChange={handleImgChange}
          />
          <StyledButtonGroup>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </StyledButtonGroup>
        </StyledForm>
      </DialogContent>
    </Dialog>
  )
}
