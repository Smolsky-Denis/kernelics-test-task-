import { TStatusType } from "common/constants/constants"

export interface IEmployee {
  id: number
  name: string
  status: TStatusType
  img: string
}