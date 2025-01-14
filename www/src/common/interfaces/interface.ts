import { TStatusType } from 'common/constants/status'

export interface IEmployee {
  id: number
  name: string
  status: TStatusType
  img: string
}
