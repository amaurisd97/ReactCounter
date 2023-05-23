import { Action, State } from '../types/Interfaces.m'

export const CountReducer = ({ click, count }: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: (count += 1), click: (click += 1) }
    case 'decrement':
      return { count: (count -= 1), click: (click += 1) }
    case 'bg-color':
      return { click: (click += 1), count }
    case 'reset':
      if (action.init || action.init === 0) {
        return {
          count: (count = action.init),
          click: (click += 1),
        }
      }
      return { count, click }
    default:
      throw new Error('NOT_A_ACTION_TYPE')
  }
}
