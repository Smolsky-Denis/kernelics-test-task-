export type TStatusType =
  | 'Working'
  | 'OnVacation'
  | 'LunchTime'
  | 'BusinessTrip'

export interface IView {
  value: TStatusType
  title: string
  color: string
}

export const statusTypes: { [key: string]: TStatusType } = {
  Working: 'Working',
  OnVacation: 'OnVacation',
  LunchTime: 'LunchTime',
  BusinessTrip: 'BusinessTrip',
}

export const viewList: IView[] = [
  {
    value: statusTypes.Working,
    title: 'Working',
    color: '#35d07c',
  },
  {
    value: statusTypes.OnVacation,
    title: 'On Vacation',
    color: '#f5675a',
  },
  {
    value: statusTypes.LunchTime,
    title: 'Lunch Time',
    color: '#ffc107',
  },
  {
    value: statusTypes.BusinessTrip,
    title: 'Business Trip',
    color: '#9c37c0',
  },
]
