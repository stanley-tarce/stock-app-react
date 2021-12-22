import React, { useContext } from 'react'
import { CreateContext } from '../DataHooks'

function SignInFuncsVar() {
  const { active } = useContext(CreateContext)
  const emailStateChange = active.email ? "translate-y-[-13px]" : "translate-y-0"
  const passwordStateChange = active.password ? "translate-y-[-13px]" : "translate-y-0"
  const clickOutside = (state, ref, setState, type) => {
    return e => {
      if (state && !ref.current.contains(e.target) && ref.current && ref.current.value.length === 0) {
        setState({ ...state, [type]: false })
      }
    }
  }
  return {
    emailStateChange,
    passwordStateChange,
    clickOutside
  }
}

export default SignInFuncsVar


