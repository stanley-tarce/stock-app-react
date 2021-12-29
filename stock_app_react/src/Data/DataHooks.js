import React, { useState, createContext } from 'react'
export const CreateContext = createContext()
export default function DataHooks({ children }) {
  const [headers, setHeaders] = useState({
    'access-token': '',
    'client': '',
    'uid': '',
    'expiry': ''
  })
  // FORMS
  const [loginEmailState, setLoginEmailState] = useState(false)
  const [loginPasswordState, setLoginPasswordState] = useState(false)
  const [signUpEmailState, setSignUpEmailState] = useState(false)
  const [signUpPasswordState, setSignUpPasswordState] = useState(false)
  const [signUpConfirmPasswordState, setConfirmSignUpPasswordState] = useState(false)
  const [signUpNameState, setSignUpNameState] = useState(false)
  // FORMS END

  // Market Data
  const [marketData, setMarketData] = useState([])

  let context =
  {
    headers,
    setHeaders,
    // Login Email States are for CSS Styling of Inputs 
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
    signUpNameState,
    setSignUpNameState,
    // -- END
    marketData,
    setMarketData
  }
  return (
    <CreateContext.Provider value={context}>
      {children}
    </CreateContext.Provider>
  )
}

