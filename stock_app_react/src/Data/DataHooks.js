import React, { useState, createContext } from 'react'
export const CreateContext = createContext()
export default function DataHooks({ children }) {
  const [headers, setHeaders] = useState({
    'access-token': '',
    'client': '',
    'uid': '',
    'expiry': ''
  })
  const [loginEmailState, setLoginEmailState] = useState(false)
  const [loginPasswordState, setLoginPasswordState] = useState(false)

  let context =
  {
    headers,
    setHeaders,
    loginEmailState,
    setLoginEmailState,
    loginPasswordState,
    setLoginPasswordState,

  }
  return (
    <CreateContext.Provider value={context}>
      {children}
    </CreateContext.Provider>
  )
}

