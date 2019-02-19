import * as React from 'react'

export interface IProps {
  value: any,
  onIncrement?: () => void,
  onDecrement?: () => void
}

const Counter = ({ value, onIncrement, onDecrement }: IProps) => (
  <>
    <p>点击次数： {value}</p>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </>
)

export default Counter
