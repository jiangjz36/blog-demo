import React, { createContext, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Demo from './Demo'
import { Helmet } from 'react-helmet'

interface IContext {
  user: object,
  setUser: (args: object) => void,
  auth: boolean,
  setAuth: (args: boolean) => void
}
const contextData: IContext = {
  user: {},
  setUser: () => {},
  auth: false,
  setAuth: () => {}
}
const userContext = createContext(contextData);

const Test = () => (<div>Test</div>)

const Page404 = () => (<div>404</div>)

const App = () => {
  const [user, setUser] = useState({})
  const [auth, setAuth] = useState(false)

  return (
    <userContext.Provider value={{
      user, setUser, auth, setAuth
    }}>
      <Helmet
        titleTemplate='%s | xxBBS ----- 连接你和我'
        meta={[
          { name: 'charset', content: 'utf-8' },
          { name: 'description', content: '全世界最不为人知的电子留言板' }
        ]}
      />
      <Switch>
        <Route exact path='/demo' component={Demo} />
        <Route exact path='*' component={Page404} />
        {/* <Route path='/home' component={HomePage} />
        <Route path='/threads' component={ThreadListPage} />
        <Route path='/profile/:username' component={ProfilePage} />
        <Route path='/setting' component={SettingPage} /> */}
      </Switch>
    </userContext.Provider>
  )
}

export default App