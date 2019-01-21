import React, { Component } from 'react'
import styled from '@emotion/styled'
import Square, { size } from './Square'

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: ${size * -1.5}px;
  margin-left: ${size * -1.5}px;
  display: flex;
  flex-flow: row wrap;
  width: ${size * 3.3}px;
`

const squares = [
  'TOP_LEFT',
  'TOP_CENTER',
  'TOP_RIGHT',
  'MIDDLE_LEFT',
  'CENTER',
  'MIDDLE_RIGHT',
  'BOTTOM_LEFT',
  'BOTTOM_CENTER',
  'BOTTOM_RIGHT'
]

interface Props {
  state: string
  transitions: string[]
  send: (transition: string) => void
}
export default ({ state, transitions, send }: Props) => (
  <Container>
    {squares.map((square, index) => {
      const transition = transitions.find(transition =>
        RegExp(`PLAY_._${square}`).test(transition)
      )
      return (
        <Square
          key={index}
          state={state[index]}
          onClick={transition ? () => send(transition) : undefined}
        />
      )
    })}
  </Container>
)
