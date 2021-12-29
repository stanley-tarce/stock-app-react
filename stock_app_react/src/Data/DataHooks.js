import React, { useState, createContext } from 'react'
export const CreateContext = createContext()
export default function DataHooks({ children }) {
  const [headers, setHeaders] = useState({
    'access-token': '',
    'client': '',
    'uid': '',
    'expiry': ''
  })
  const [userData, setUserData] = useState({})
  const [traderData, setTraderData] = useState({})
  const [adminData, setAdminData] = useState({})
  const [loginEmailState, setLoginEmailState] = useState(false)
  const [loginPasswordState, setLoginPasswordState] = useState(false)

  const [signUpEmailState, setSignUpEmailState] = useState(false)
  const [signUpPasswordState, setSignUpPasswordState] = useState(false)
  const [signUpConfirmPasswordState, setConfirmSignUpPasswordState] = useState(false)

  let context =
  {
    headers,
    setHeaders,
    loginEmailState,
    setLoginEmailState,
    loginPasswordState,
    setLoginPasswordState,

    signUpEmailState,
    setSignUpEmailState,
    signUpPasswordState,
    setSignUpPasswordState,
    signUpConfirmPasswordState,
    setConfirmSignUpPasswordState,
    userData,
    setUserData,
    traderData,
    setTraderData,
    adminData,
    setAdminData
  }
  return (
    <CreateContext.Provider value={context}>
      {children}
    </CreateContext.Provider>
  )
}

