import React, { Component } from 'react'
import styled from '@emotion/styled'
import Board from './Board'
import TicTacToeMachine, {
  TicTacToeContext,
  TicTacToeStateSchema,
  TicTacToeEvent
} from './machine'
import { useMachine } from './useMachine'

const Result = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: -40px auto;
  font-size: 80px;
  text-align: center;
`

const finalStates: Record<string, string> = {
  DRAW: 'Draw',
  X_WINS: 'X Wins!',
  O_WINS: 'O Wins!'
}

const App = () => {
  const machine = TicTacToeMachine.withConfig({
    actions: {
      onDone: (...args: any[]) => console.info('EXIT', ...args)
    }
  })
  const [state, send] = useMachine<
    TicTacToeContext,
    TicTacToeStateSchema,
    TicTacToeEvent
  >(machine, { log: true })

  const value: string = state.value.toString()
  const final = finalStates[value]

  return final ? (
    <Result>{final}</Result>
  ) : (
    <Board
      state={value}
      transitions={state.nextEvents}
      send={(event: string) => send({ type: event } as TicTacToeEvent)}
    />
  )
}

export default App
