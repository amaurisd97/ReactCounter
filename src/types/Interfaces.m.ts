export interface Action {
  type: string
  init?: number
}

export interface State {
  count: number
  click: number
}
