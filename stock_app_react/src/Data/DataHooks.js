import axios from 'axios'

import React, { useState, createContext } from 'react'
const source = axios.CancelToken.source()
export const CreateContext = createContext()

export default function DataHooks({ children }) {
  const [headers, setHeaders] = useState({
    'access-token': '',
    'client': '',
    'uid': '',
    'expiry': ''
  })
  const [userData, setUserData] = useState({})
  const [totalData, setTotalData] = useState({
    TRADERINFO: {},
    TRADERSTOCKS: [],
    TRADERTRANSACTIONS: [],
    ADMININFO: {},
    ADMINLISTOFTRADERS: [],
    ADMINLISTS: [],
    ADMINSHOWTRADER: {},
    MARKETS: [],
    MARKETINFO: {},
  })
  const [loginEmailState, setLoginEmailState] = useState(false)
  const [loginPasswordState, setLoginPasswordState] = useState(false)
  const [signUpEmailState, setSignUpEmailState] = useState(false)
  const [signUpPasswordState, setSignUpPasswordState] = useState(false)
  const [signUpConfirmPasswordState, setConfirmSignUpPasswordState] = useState(false)
  const [signUpNameState, setSignUpNameState] = useState(false)





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
    totalData,
    setTotalData,
    signUpNameState,
    setSignUpNameState,

  }
  return (
    <CreateContext.Provider value={context}>
      {children}
    </CreateContext.Provider>
  )
}

