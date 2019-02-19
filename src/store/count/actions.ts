import * as constants from './constants'

export interface IIncrement {
  type: constants.INCREMENT
}
export interface IDECREMENT {
  type: constants.DECREMENT
}

export type All = IIncrement | IDECREMENT

export function increment(): IIncrement {
  return {
    type: constants.INCREMENT
  }
}
export function decrement(): IDECREMENT {
  return {
    type: constants.DECREMENT
  }
}