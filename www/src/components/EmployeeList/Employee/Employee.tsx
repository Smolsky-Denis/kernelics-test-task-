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
import { viewList, TStatusType } from 'common/constants/constants'
import { MenuItem, SelectChangeEvent } from '@mui/material'
import { setEmployeeStatus } from '../../../model/actions'
import { SelectBox } from 'common/ui/SelectBox/SelectBox'
import { FC, memo, useEffect } from 'react'
import { useAppDispatch } from 'app/hooks'

interface IEmployeeProps {
  id: number
  name: string
  status: TStatusType
  img: string
}
export const Employee: FC<IEmployeeProps> = memo(
  ({ id, name, status, img }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
      console.log('mount Employee')

      return () => {
        console.log('UNMOUNT Employee')
      }
    }, [])

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
              {viewList.map(({ value, title, color }) => {
                return (
                  <MenuItem key={color} value={value}>
                    <StyledMenuItemContent>
                      <StyledRadioButtonContainer color={color}>
                        <StyledRadioButton />
                      </StyledRadioButtonContainer>
                      {title}
                    </StyledMenuItemContent>
                  </MenuItem>
                )
              })}
            </SelectBox>
          </StyledSelectContainer>
        </div>
      </StyledContainer>
    )
  },
)
