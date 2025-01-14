import {
  StyledContainer,
  StyledImg,
  StyledMenuItemContent,
  StyledName,
  StyledPersonAddIcon,
  StyledImgContainer,
  StyledRadioButton,
  StyledRadioButtonContainer,
  StyledSelectContainer,
} from './Employee.styled'
import { viewList, TStatusType } from 'common/constants/status'
import { MenuItem, SelectChangeEvent } from '@mui/material'
import { SelectBox } from 'common/ui/SelectBox/SelectBox'
import { setEmployeeStatus } from 'model/actions'
import { useAppDispatch } from 'app/hooks'
import { FC, memo } from 'react'

interface IEmployeeProps {
  id: number
  name: string
  status: TStatusType
  img: string
}

export const Employee: FC<IEmployeeProps> = memo(
  ({ id, name, status, img }) => {
    const dispatch = useAppDispatch()

    const handleSelectChange = (e: SelectChangeEvent) => {
      const body = {
        id,
        status: e.target.value as TStatusType,
        name,
        img,
      }

      dispatch(setEmployeeStatus(body))
    }

    return (
      <StyledContainer>
        <StyledImgContainer>
          {img ? (
            <StyledImg src={img} alt="Profile IMG" />
          ) : (
            <StyledPersonAddIcon />
          )}
        </StyledImgContainer>
        <div>
          <StyledName>{name}</StyledName>
          <StyledSelectContainer>
            <SelectBox
              value={status}
              handleChange={handleSelectChange}
              variant="standard"
            >
              {viewList.map(({ value, title, color }) => (
                <MenuItem key={color} value={value}>
                  <StyledMenuItemContent>
                    <StyledRadioButtonContainer color={color}>
                      <StyledRadioButton />
                    </StyledRadioButtonContainer>
                    {title}
                  </StyledMenuItemContent>
                </MenuItem>
              ))}
            </SelectBox>
          </StyledSelectContainer>
        </div>
      </StyledContainer>
    )
  },
)
