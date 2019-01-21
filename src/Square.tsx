import React, { Component } from 'react'
import styled from '@emotion/styled'

export const size = 100
const Container = styled.div`
  font-size: ${size}px;
  width: ${size}px;
  height: ${size}px;
  color: black;
  border: 2px solid black;
  line-height: 1.2em;
  ${props => (props.onClick ? 'cursor:pointer;' : '')}
`

const icons: Record<string, string> = {
  X: '❌',
  O: '⭕️'
}

interface Props {
  state: string
  onClick?: () => void
}
export default ({ state, onClick }: Props) => (
  <Container onClick={onClick}>{icons[state]}</Container>
)
