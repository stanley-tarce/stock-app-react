import React, { useState, createContext } from 'react'
export const CreateContext = createContext()
export default function DataHooks({ children }) {
  const [headers, setHeaders] = useState({
    'access-token': 'st-token',
    'client': '',
    'uid': '',
    'expiry': ''
  })
  const [active, setActive] = useState({ email: false, password: false })
  let context =
  {
    headers,
    setHeaders,
    active,
    setActive
  }
  return (
    <CreateContext.Provider value={context}>
      {children}
    </CreateContext.Provider>
  )
}

