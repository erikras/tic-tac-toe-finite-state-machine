import { useState, useMemo, useEffect } from 'react'
import { interpret } from 'xstate/lib/interpreter'
import { StateMachine, StateSchema, EventObject, State } from 'xstate'

interface Options {
  log?: boolean
}
export function useMachine<
  TContext,
  TStateSchema extends StateSchema,
  TEvent extends EventObject
>(
  machine: StateMachine<TContext, TStateSchema, TEvent>,
  options: Options = {}
): [State<TContext, EventObject>, (event: TEvent) => void] {
  const [current, setCurrent] = useState<State<TContext, EventObject>>(
    machine.initialState
  )
  const service = useMemo(
    () =>
      interpret(machine)
        .onTransition(state => {
          options.log && console.log('VALUE:', state.value)
          setCurrent(state)
        })
        .onEvent(e => options.log && console.log('EVENT:', e))
        .start(),
    []
  )

  useEffect(() => {
    return () => service.stop()
  }, [])

  return [current, service.send]
}
